/**
 * FORMULARIO DE CONSULTA Y RESERVA DIRECTO A WHATSAPP
 * El Ventanal al Cielo - La Buitrera de Palmira, Valle del Cauca
 * Soporte para Cabañas (Hospedaje Nocturno) y Pasadías (Día sin pernoctar)
 */

import { siteConfig } from '../data/site-data.js';
import { copyToClipboard } from './copy-utils.js';

function formatSpanishDate(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const date = new Date(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${days[date.getDay()]} ${day} de ${months[date.getMonth()]} de ${year}`;
}

export class BookingFlowModal {
  constructor() {
    this.modalEl = null;
    this.currentView = 'form'; // 'form' | 'success'
    this.formData = {
      checkin: '',
      checkout: '',
      guests: '2',
      cabinId: 'cabana-privada-plan-pareja',
      cabinName: 'Cabaña Privada con Jacuzzi · Plan Pareja',
      isDayPass: false,
      contactName: '',
      contactPhone: '',
      includeTransport: false,
      includeDecoration: false,
      message: ''
    };
    this.lastWhatsappUrl = '';
    this.lastSummaryText = '';

    this.init();
  }

  init() {
    this.renderModalStructure();
    this.attachGlobalTriggers();
  }

  renderModalStructure() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'booking-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'booking-modal-title');

    overlay.innerHTML = `
      <div class="modal-container doppelrand-shell" style="max-width: 680px;">
        <div class="doppelrand-core" style="padding: 0; overflow: hidden;">
          <div class="modal-header">
            <div>
              <span class="eyebrow-tag eyebrow-tag-sunset" id="booking-step-badge">Atención directa · WhatsApp Oficial</span>
              <h2 class="modal-title font-serif" id="booking-modal-title" style="margin-top: 0.35rem;">Consultar Disponibilidad</h2>
            </div>
            <button type="button" class="modal-close-btn" id="btn-close-booking-modal" aria-label="Cerrar ventana de consulta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div class="modal-body" id="booking-modal-content" style="padding: 1.75rem 2rem;">
            <!-- Contenido dinámico del formulario o confirmación -->
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalEl = overlay;

    // Escuchar botón de cierre y clic fuera
    overlay.querySelector('#btn-close-booking-modal').addEventListener('click', () => this.close());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
      const copyNequiBtn = e.target.closest('[data-copy-nequi-action]');
      if (copyNequiBtn) {
        copyToClipboard(siteConfig.brand.nequiNumber, copyNequiBtn);
      }
    });

    // Tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        this.close();
      }
    });
  }

  attachGlobalTriggers() {
    document.querySelectorAll('[data-open-booking]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cabinId = e.currentTarget.dataset.cabinId || '';
        const withDecoration = e.currentTarget.dataset.withDecoration === 'true';
        this.open(cabinId, withDecoration);
      });
    });
  }

  calculateBookingCost() {
    const isDayPass = this.formData.isDayPass || (this.formData.cabinId && this.formData.cabinId.startsWith('pasadia-'));
    const decorationCost = this.formData.includeDecoration ? (siteConfig.services?.decoration?.price || 80000) : 0;

    // Cálculo para Pasadías (1 día, horario 8:00 am a 4:00 pm, Lun-Jue)
    if (isDayPass) {
      if (!this.formData.checkin) return null;

      const dayPassObj = siteConfig.dayPasses?.find(d => d.id === this.formData.cabinId) || siteConfig.dayPasses?.[0];
      const baseCost = dayPassObj ? dayPassObj.price : 180000;
      const transportCost = this.formData.includeTransport ? (siteConfig.services.transport?.pricePerCouple || 60000) : 0;
      const totalCost = baseCost + transportCost + decorationCost;
      const advanceAmount = Math.round(baseCost * 0.5) + (this.formData.includeTransport ? 30000 : 0) + (this.formData.includeDecoration ? 40000 : 0);
      const remainingAmount = totalCost - advanceAmount;

      const dateObj = new Date(this.formData.checkin + 'T12:00:00');
      const dayOfWeek = dateObj.getDay(); // 0 Dom, 1 Lun, 2 Mar, 3 Mié, 4 Jue, 5 Vie, 6 Sáb
      const isMonToThu = dayOfWeek >= 1 && dayOfWeek <= 4;

      return {
        isDayPass: true,
        isMonToThu,
        totalNights: 0,
        scheduleHours: '8:00 a. m. a 4:00 p. m.',
        daysAvailableText: 'Lunes a Jueves únicamente',
        checkInTime: '8:00 am',
        checkOutTime: '4:00 pm',
        selectedCabin: dayPassObj,
        lodgingCost: baseCost,
        transportCost,
        decorationCost,
        totalCost,
        totalCostFormatted: '$' + totalCost.toLocaleString('es-CO'),
        advanceAmount,
        advanceAmountFormatted: '$' + advanceAmount.toLocaleString('es-CO'),
        remainingAmount,
        remainingAmountFormatted: '$' + remainingAmount.toLocaleString('es-CO')
      };
    }

    // Cálculo para Hospedaje Nocturno
    if (!this.formData.checkin || !this.formData.checkout) {
      return null;
    }

    const start = new Date(this.formData.checkin + 'T12:00:00');
    const end = new Date(this.formData.checkout + 'T12:00:00');
    const diffTime = end - start;
    const totalNights = Math.round(diffTime / (1000 * 60 * 60 * 24));

    if (totalNights <= 0) return null;

    let weekdayNights = 0;
    let weekendNights = 0;
    let current = new Date(start);

    for (let i = 0; i < totalNights; i++) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek === 5 || dayOfWeek === 6) {
        weekendNights++;
      } else {
        weekdayNights++;
      }
      current.setDate(current.getDate() + 1);
    }

    const selectedCabin = siteConfig.cabins.find(c => c.id === this.formData.cabinId) || siteConfig.cabins[0];
    const weekdayRate = selectedCabin ? selectedCabin.rateInfo.weekdayRate : 240000;
    const weekendRate = selectedCabin ? selectedCabin.rateInfo.weekendRate : 280000;
    const checkInTime = selectedCabin ? selectedCabin.specs.checkIn : '3:00 pm';
    const checkOutTime = selectedCabin ? selectedCabin.specs.checkOut : '1:00 pm';

    const lodgingCost = (weekdayNights * weekdayRate) + (weekendNights * weekendRate);
    const transportCost = this.formData.includeTransport ? (siteConfig.services.transport?.pricePerCouple || 60000) : 0;
    const totalCost = lodgingCost + transportCost + decorationCost;

    const advanceAmount = Math.round(lodgingCost * (siteConfig.brand.advancePercentage / 100)) + (this.formData.includeTransport ? 30000 : 0) + (this.formData.includeDecoration ? 40000 : 0);
    const remainingAmount = totalCost - advanceAmount;

    return {
      isDayPass: false,
      totalNights,
      weekdayNights,
      weekendNights,
      weekdayRate,
      weekendRate,
      checkInTime,
      checkOutTime,
      selectedCabin,
      lodgingCost,
      transportCost,
      decorationCost,
      totalCost,
      totalCostFormatted: '$' + totalCost.toLocaleString('es-CO'),
      advanceAmount,
      advanceAmountFormatted: '$' + advanceAmount.toLocaleString('es-CO'),
      remainingAmount,
      remainingAmountFormatted: '$' + remainingAmount.toLocaleString('es-CO')
    };
  }

  open(preselectedCabinId = '', withDecoration = false) {
    const selectedId = preselectedCabinId || this.formData.cabinId || 'cabana-privada-plan-pareja';
    this.formData.cabinId = selectedId;
    this.formData.includeDecoration = withDecoration;

    const dayPass = siteConfig.dayPasses?.find(d => d.id === selectedId);
    const cabin = siteConfig.cabins?.find(c => c.id === selectedId);

    if (dayPass) {
      this.formData.cabinName = dayPass.name;
      this.formData.isDayPass = true;
    } else if (cabin) {
      this.formData.cabinName = cabin.name;
      this.formData.isDayPass = false;
      if (cabin.id === 'cabana-familiar-plan-familiar') {
        this.formData.guests = '4';
      }
    } else {
      this.formData.cabinName = 'Cualquiera disponible / Asesoría';
      this.formData.isDayPass = false;
    }

    this.currentView = 'form';
    this.renderFormView();
    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  renderFormView() {
    const badge = this.modalEl.querySelector('#booking-step-badge');
    const title = this.modalEl.querySelector('#booking-modal-title');
    const container = this.modalEl.querySelector('#booking-modal-content');

    const isDayPass = this.formData.isDayPass || (this.formData.cabinId && this.formData.cabinId.startsWith('pasadia-'));

    badge.textContent = isDayPass ? 'Pasadía de Día · WhatsApp Oficial' : 'Atención directa · WhatsApp Oficial';
    title.textContent = isDayPass ? 'Consultar Pasadía en la Montaña' : 'Consultar Disponibilidad';

    const today = new Date().toISOString().split('T')[0];

    const cabinOptions = siteConfig.cabins.map(c => `
      <option value="${c.id}" ${this.formData.cabinId === c.id ? 'selected' : ''}>
        ${c.name} (${c.rateInfo.weekdayRateFormatted} / ${c.rateInfo.weekendRateFormatted})
      </option>
    `).join('');

    const dayPassOptions = (siteConfig.dayPasses || []).map(d => `
      <option value="${d.id}" ${this.formData.cabinId === d.id ? 'selected' : ''}>
        ${d.name} (${d.priceFormatted} · 8am - 4pm)
      </option>
    `).join('');

    container.innerHTML = `
      <form id="consultation-form">
        <p style="margin-bottom: 1.35rem; font-size: var(--text-sm); color: var(--text-muted); line-height: 1.6;">
          ${isDayPass
            ? 'Regálate un día de descanso rodeado de naturaleza. Selecciona tu fecha de <strong>lunes a jueves (8am - 4pm)</strong> y consulta directamente en WhatsApp.'
            : 'Dinos tus fechas y preferencias de descanso. Al enviar el formulario, <strong>se abrirá directamente WhatsApp (+57 318 383 1095)</strong> con los detalles organizados para confirmar tu reserva.'
          }
        </p>

        <!-- 1. Alojamiento o Plan de preferencia -->
        <div class="form-group" style="margin-bottom: 1rem;">
          <label class="form-label" for="consult-cabin">Alojamiento o Plan de preferencia</label>
          <select id="consult-cabin" class="form-select">
            <optgroup label="🏡 Cabañas con Hospedaje Nocturno (Check-in 3:00 pm)">
              ${cabinOptions}
            </optgroup>
            <optgroup label="✨ Pasadías de Día (Lun a Jue · 8:00 am a 4:00 pm)">
              ${dayPassOptions}
            </optgroup>
            <option value="" ${!this.formData.cabinId ? 'selected' : ''}>Cualquiera disponible / Asesoría personalizada</option>
          </select>
        </div>

        <!-- 2. Fechas -->
        <div id="dates-inputs-row" style="display: grid; grid-template-columns: ${isDayPass ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))'}; gap: 1rem; margin-bottom: 1rem;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" for="consult-checkin">
              ${isDayPass ? 'Fecha del Pasadía (Lunes a Jueves) <span class="required-star">*</span>' : 'Fecha de llegada (Check-in) <span class="required-star">*</span>'}
            </label>
            <input type="date" id="consult-checkin" class="form-input" min="${today}" value="${this.formData.checkin}" required>
            <span class="error-message" id="err-consult-checkin">Selecciona una fecha válida.</span>
          </div>

          <div class="form-group" id="checkout-group" style="margin-bottom: 0; display: ${isDayPass ? 'none' : 'flex'};">
            <label class="form-label" for="consult-checkout">Fecha de salida (Check-out) <span class="required-star">*</span></label>
            <input type="date" id="consult-checkout" class="form-input" min="${this.formData.checkin || today}" value="${this.formData.checkout}">
            <span class="error-message" id="err-consult-checkout">La salida debe ser posterior a la llegada.</span>
          </div>
        </div>

        <!-- 3. Huéspedes y Contacto -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" for="consult-guests">Número de personas</label>
            <select id="consult-guests" class="form-select">
              <option value="2" ${this.formData.guests === '2' ? 'selected' : ''}>2 Huéspedes (Plan Pareja)</option>
              <option value="4" ${this.formData.guests === '4' ? 'selected' : ''}>4 Huéspedes (Plan Familiar)</option>
              <option value="1" ${this.formData.guests === '1' ? 'selected' : ''}>1 Huésped</option>
              <option value="3" ${this.formData.guests === '3' ? 'selected' : ''}>3 Huéspedes</option>
            </select>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" for="consult-name">Nombre completo <span class="required-star">*</span></label>
            <input type="text" id="consult-name" class="form-input" placeholder="Tu nombre y apellido" value="${this.formData.contactName}" required>
            <span class="error-message" id="err-consult-name">Ingresa tu nombre para la consulta.</span>
          </div>

          <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label" for="consult-phone">WhatsApp / Teléfono <span class="required-star">*</span></label>
            <input type="tel" id="consult-phone" class="form-input" placeholder="Ej: 318 123 4567" value="${this.formData.contactPhone}" required>
            <span class="error-message" id="err-consult-phone">Ingresa tu número de contacto.</span>
          </div>
        </div>

        <!-- 4.1 Servicio Adicional de Transporte -->
        <div style="background: rgba(74, 59, 50, 0.035); border: 1px solid var(--border-subtle); padding: 0.85rem 1rem; border-radius: var(--radius-inner-sm); margin-bottom: 0.75rem;">
          <label class="checkbox-container" style="font-size: var(--text-xs); margin: 0; align-items: flex-start;">
            <input type="checkbox" id="consult-transport" class="checkbox-input" ${this.formData.includeTransport ? 'checked' : ''}>
            <span class="checkbox-label-text" style="color: var(--c-earth-brown); line-height: 1.45;">
              🚘 <strong>Servicio de transporte adicional:</strong> Traslado en vehículo desde el Parque de La Buitrera hasta el Glamping (+$60.000 por pareja). <em>Parqueadero privado gratuito en las instalaciones si vienes en tu propio vehículo.</em>
            </span>
          </label>
        </div>

        <!-- 4.2 Servicio Adicional de Decoración Especial -->
        <div style="background: rgba(242, 140, 40, 0.06); border: 1px dashed rgba(242, 140, 40, 0.35); padding: 0.85rem 1rem; border-radius: var(--radius-inner-sm); margin-bottom: 1rem;">
          <label class="checkbox-container" style="font-size: var(--text-xs); margin: 0; align-items: flex-start;">
            <input type="checkbox" id="consult-decoration" class="checkbox-input" ${this.formData.includeDecoration ? 'checked' : ''}>
            <span class="checkbox-label-text" style="color: var(--c-earth-brown); line-height: 1.45;">
              ✨ <strong>Decoración Especial (+$80.000):</strong> Incluye pétalos, letrero, globos, letrero con luz y velas. <em>Ideal para aniversarios, propuestas o cumpleaños.</em>
            </span>
          </label>
        </div>

        <!-- 5. Mensaje o Solicitud Especial Opcional -->
        <div class="form-group" style="margin-bottom: 1.25rem;">
          <label class="form-label" for="consult-message">Mensaje adicional o solicitud especial (Opcional)</label>
          <textarea id="consult-message" class="form-textarea" rows="2" placeholder="¿Celebran algún aniversario, cumpleaños o tienen alguna pregunta específica?">${this.formData.message}</textarea>
        </div>

        <!-- 6. Tarjeta de Cotización en Vivo con Nequi -->
        <div id="consult-live-card" style="margin-bottom: 1.25rem;">
          ${this.getLiveQuoteHtml()}
        </div>

        <!-- 6.1 Callout recordatorio de comprobante por WhatsApp -->
        <div class="voucher-notice-box" style="margin-bottom: 1.25rem;">
          <span style="font-size: 1.25rem; flex-shrink: 0; line-height: 1;">📲</span>
          <div>
            <strong>Paso clave para bloquear tu fecha:</strong><br>
            Al pulsar el botón verde se abrirá WhatsApp con los datos de tu consulta. Realiza la transferencia del 50% de anticipo a la cuenta Nequi <strong>${siteConfig.brand.nequiNumber}</strong> y <strong>adjunta la captura de pantalla de la transferencia en el chat</strong> para apartar tu cabaña de inmediato.
          </div>
        </div>

        <!-- 7. Botón Principal a WhatsApp -->
        <button type="submit" class="btn-luxury btn-whatsapp" id="btn-submit-consultation" style="width: 100%; justify-content: center; padding: 1rem 1.5rem; font-size: var(--text-base); font-weight: 600; gap: 0.65rem;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.18-.544-1.898-.79-3.119-2.73-3.214-2.856-.095-.127-.77-1.026-.77-1.956 0-.931.488-1.387.662-1.576.174-.188.38-.236.507-.236.126 0 .253.002.364.007.118.006.275-.045.43.328.16.386.544 1.328.592 1.425.048.097.08.21.016.337-.064.127-.096.206-.19.317-.096.111-.202.248-.288.334-.096.095-.196.198-.084.39.111.191.494.814 1.06 1.318.729.648 1.343.85 1.534.945.19.095.302.079.414-.048.112-.127.476-.556.603-.746.127-.19.254-.159.429-.095.174.064 1.11.523 1.3.618.19.095.317.143.365.222.047.079.047.46-.097.865z"/>
          </svg>
          <span>${isDayPass ? 'Consultar pasadía por WhatsApp' : 'Enviar consulta por WhatsApp'}</span>
        </button>

        <!-- 8. Alternativa Directa -->
        <div style="text-align: center; margin-top: 1rem; font-size: var(--text-xs); color: var(--text-muted); line-height: 1.5;">
          ¿Prefieres chatear de inmediato sin llenar fechas?
          <a href="https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent('¡Hola! Deseo consultar información y disponibilidad para El Ventanal al Cielo.')}" target="_blank" rel="noopener noreferrer" style="color: #1E7E34; font-weight: 700; text-decoration: underline; margin-left: 0.35rem; display: inline-flex; align-items: center; gap: 0.25rem;">
            <span>Chatear por WhatsApp directo</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </a>
        </div>
      </form>
    `;

    this.bindFormEvents();
  }

  getNequiPaymentBoxHtml(costInfo) {
    const isCalculated = !!costInfo;
    const advanceFormatted = costInfo ? costInfo.advanceAmountFormatted : '50% del total';

    return `
      <div class="nequi-quote-box" style="margin-top: 0.95rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="background: rgba(255, 0, 122, 0.22); color: #FF66B2; border: 1px solid rgba(255, 0, 122, 0.4); font-weight: 700; font-size: 0.7rem; padding: 0.2rem 0.6rem; border-radius: var(--radius-pill); letter-spacing: 0.05em; text-transform: uppercase;">
              Pago por Nequi
            </span>
            <span style="font-size: 0.75rem; color: rgba(255, 255, 255, 0.9); font-weight: 600;">
              Anticipo para apartar fecha (50%)
            </span>
          </div>
          <div style="text-align: right;">
            <span style="color: var(--c-solar-gold); font-size: 1.15rem; font-weight: 700; font-family: var(--font-serif); letter-spacing: -0.01em;">
              ${advanceFormatted} ${isCalculated ? 'COP' : ''}
            </span>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.09); border-radius: 8px; padding: 0.6rem 0.85rem; border: 1px solid rgba(255, 255, 255, 0.15); flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: #FF007A; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.85rem; color: #FFFFFF; flex-shrink: 0; box-shadow: 0 2px 8px rgba(255, 0, 122, 0.4);">
              N
            </div>
            <div>
              <span style="display: block; font-size: 0.65rem; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.06em;">Cuenta Nequi Oficial</span>
              <strong style="font-family: monospace; font-size: 1.2rem; letter-spacing: 0.06em; color: #FFFFFF;">${siteConfig.brand.nequiNumber}</strong>
            </div>
          </div>
          <button type="button" class="btn-copy-nequi" data-copy-nequi-action style="padding: 0.45rem 0.95rem; font-size: 0.75rem; cursor: pointer;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>Copiar Nequi</span>
          </button>
        </div>

        <div style="display: flex; align-items: flex-start; gap: 0.6rem; margin-top: 0.75rem; padding-top: 0.65rem; border-top: 1px dashed rgba(255, 255, 255, 0.18); font-size: 0.73rem; color: rgba(255, 255, 255, 0.92); line-height: 1.5;">
          <span style="font-size: 1.1rem; flex-shrink: 0; line-height: 1;">📸</span>
          <span>
            <strong>Envía tu comprobante por WhatsApp:</strong> Para bloquear tu fecha en el calendario, realiza la transferencia del 50% (${advanceFormatted}) a la cuenta Nequi <strong>${siteConfig.brand.nequiNumber}</strong> y <strong>adjunta la captura de pantalla en el chat</strong>.
          </span>
        </div>
      </div>
    `;
  }

  getLiveQuoteHtml() {
    const costInfo = this.calculateBookingCost();
    const isDayPass = this.formData.isDayPass || (this.formData.cabinId && this.formData.cabinId.startsWith('pasadia-'));

    if (costInfo) {
      if (isDayPass) {
        const dayPassObj = siteConfig.dayPasses?.find(d => d.id === this.formData.cabinId) || siteConfig.dayPasses?.[0];
        const dayAlert = !costInfo.isMonToThu
          ? `<div style="background: rgba(162, 35, 29, 0.08); border-left: 3px solid var(--c-colibri-red); padding: 0.5rem 0.75rem; border-radius: 4px; margin-bottom: 0.65rem; color: var(--c-colibri-red); font-size: 0.75rem;">
              ⚠️ <strong>Atención:</strong> Los pasadías están habilitados únicamente de <strong>Lunes a Jueves</strong>. Por favor selecciona una fecha entre semana.
            </div>`
          : '';

        return `
          <div class="doppelrand-shell" style="background: rgba(242, 140, 40, 0.04);">
            <div class="doppelrand-core" style="padding: 1rem 1.25rem; font-size: var(--text-xs);">
              ${dayAlert}
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.65rem; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                  <span style="font-weight: 700; color: var(--c-earth-brown); font-size: var(--text-sm); display: block;">
                    ${dayPassObj ? dayPassObj.name : 'Pasadía en la Montaña'}
                  </span>
                  <span style="color: var(--text-muted);">
                    ${formatSpanishDate(this.formData.checkin)}
                  </span>
                </div>
                <span class="badge-confirmed" style="background: rgba(34, 139, 34, 0.1); color: #1E7E34; border-color: rgba(34, 139, 34, 0.25);">
                  Pasadía de día (8am - 4pm)
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 0.65rem;">
                <div>
                  <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Horario de ingreso</span>
                  <strong style="color: var(--c-earth-brown);">8:00 a. m. a 4:00 p. m.</strong>
                </div>
                <div>
                  <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Días permitidos</span>
                  <strong style="color: var(--c-earth-brown);">Lunes a Jueves</strong>
                </div>
                <div>
                  <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Tarifa neta pareja</span>
                  <strong style="color: var(--c-orange-sunset); font-size: 0.95rem;">${costInfo.totalCostFormatted} COP</strong>
                </div>
                <div>
                  <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Anticipo 50%</span>
                  <strong style="color: var(--c-earth-brown);">${costInfo.advanceAmountFormatted} COP</strong>
                </div>
              </div>

              <p style="margin: 0; color: var(--text-muted); font-size: 0.75rem;">
                ✓ Incluye uso de cabaña de día, snacks, piscina natural, zona de hamacas, malla catamarán y espacios naturales.
                ${this.formData.includeTransport ? '<br>✓ Incluye servicio de transporte desde el Parque de La Buitrera.' : ''}
                ${this.formData.includeDecoration ? '<br>✓ Incluye Decoración Especial (+$80.000: pétalos, letrero, globos, letrero con luz y velas).' : ''}
              </p>

              ${this.getNequiPaymentBoxHtml(costInfo)}
            </div>
          </div>
        `;
      }

      // Hospedaje nocturno
      const selectedCabin = siteConfig.cabins.find(c => c.id === this.formData.cabinId) || siteConfig.cabins[0];
      return `
        <div class="doppelrand-shell" style="background: rgba(242, 140, 40, 0.04);">
          <div class="doppelrand-core" style="padding: 1rem 1.25rem; font-size: var(--text-xs);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.65rem; margin-bottom: 0.65rem; flex-wrap: wrap; gap: 0.5rem;">
              <div>
                <span style="font-weight: 700; color: var(--c-earth-brown); font-size: var(--text-sm); display: block;">
                  ${selectedCabin ? selectedCabin.name : 'Estadía en Cabaña'}
                </span>
                <span style="color: var(--text-muted);">
                  ${formatSpanishDate(this.formData.checkin)} al ${formatSpanishDate(this.formData.checkout)}
                </span>
              </div>
              <span class="badge-confirmed" style="background: rgba(34, 139, 34, 0.1); color: #1E7E34; border-color: rgba(34, 139, 34, 0.25);">
                ${costInfo.totalNights} noche${costInfo.totalNights > 1 ? 's' : ''}
              </span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.75rem; margin-bottom: 0.65rem;">
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Horario Check-in</span>
                <strong style="color: var(--c-earth-brown);">${costInfo.checkInTime}</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Horario Check-out</span>
                <strong style="color: var(--c-earth-brown);">${costInfo.checkOutTime}</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Tarifa estimada</span>
                <strong style="color: var(--c-orange-sunset); font-size: 0.95rem;">${costInfo.totalCostFormatted} COP</strong>
              </div>
              <div>
                <span style="color: var(--text-muted); display: block; font-size: 0.7rem; text-transform: uppercase;">Anticipo 50%</span>
                <strong style="color: var(--c-earth-brown);">${costInfo.advanceAmountFormatted} COP</strong>
              </div>
            </div>

            <p style="margin: 0; color: var(--text-muted); font-size: 0.75rem;">
              ✓ Incluye desayuno campestre tradicional, zona de fogata con masmelos, piscina natural y seguro médico.
              ${this.formData.includeTransport ? '<br>✓ Incluye servicio de transporte desde el Parque de La Buitrera.' : ''}
              ${this.formData.includeDecoration ? '<br>✓ Incluye Decoración Especial (+$80.000: pétalos, letrero, globos, letrero con luz y velas).' : ''}
            </p>

            ${this.getNequiPaymentBoxHtml(costInfo)}
          </div>
        </div>
      `;
    }

    return `
      <div style="background: rgba(74, 59, 50, 0.03); border: 1px dashed var(--border-subtle); padding: 1rem 1.15rem; border-radius: var(--radius-inner-sm); font-size: var(--text-xs); color: var(--text-muted);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--c-orange-sunset)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <strong style="color: var(--c-earth-brown); font-size: var(--text-sm);">Aparta tu cupo con el 50% de anticipo</strong>
          </div>
          <div style="display: flex; align-items: center; gap: 0.4rem;">
            <span style="font-family: monospace; font-weight: 700; color: #FFFFFF; background: #1C0A35; padding: 0.25rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">Nequi: ${siteConfig.brand.nequiNumber}</span>
            <button type="button" data-copy-nequi-action class="btn-copy-nequi" style="padding: 0.25rem 0.65rem; font-size: 0.68rem; cursor: pointer;">Copiar</button>
          </div>
        </div>
        <p style="margin: 0; line-height: 1.55; color: var(--text-muted);">
          Selecciona tus fechas en el formulario para calcular el valor exacto. Al presionar el botón inferior se abrirá WhatsApp: realiza la transferencia del 50% a Nequi y <strong>envía la captura de pantalla por el chat</strong> para apartar tu fecha de inmediato.
        </p>
      </div>
    `;
  }

  updateLiveQuote() {
    const liveCard = this.modalEl.querySelector('#consult-live-card');
    if (liveCard) {
      liveCard.innerHTML = this.getLiveQuoteHtml();
    }
  }

  bindFormEvents() {
    const form = this.modalEl.querySelector('#consultation-form');
    const checkinInput = this.modalEl.querySelector('#consult-checkin');
    const checkoutInput = this.modalEl.querySelector('#consult-checkout');
    const cabinSelect = this.modalEl.querySelector('#consult-cabin');
    const guestsSelect = this.modalEl.querySelector('#consult-guests');
    const nameInput = this.modalEl.querySelector('#consult-name');
    const phoneInput = this.modalEl.querySelector('#consult-phone');
    const transportCheck = this.modalEl.querySelector('#consult-transport');
    const messageInput = this.modalEl.querySelector('#consult-message');
    const checkoutGroup = this.modalEl.querySelector('#checkout-group');
    const datesRow = this.modalEl.querySelector('#dates-inputs-row');
    const submitBtn = this.modalEl.querySelector('#btn-submit-consultation span');

    // Cambios de fecha
    checkinInput.addEventListener('change', () => {
      this.formData.checkin = checkinInput.value;
      if (this.formData.isDayPass) {
        this.formData.checkout = checkinInput.value;
      } else {
        if (checkoutInput) {
          checkoutInput.min = checkinInput.value;
          if (checkoutInput.value && checkoutInput.value <= checkinInput.value) {
            checkoutInput.value = '';
            this.formData.checkout = '';
          }
        }
      }
      this.updateLiveQuote();
    });

    if (checkoutInput) {
      checkoutInput.addEventListener('change', () => {
        this.formData.checkout = checkoutInput.value;
        this.updateLiveQuote();
      });
    }

    // Cambio de Cabaña o Pasadía
    cabinSelect.addEventListener('change', () => {
      const selectedVal = cabinSelect.value;
      this.formData.cabinId = selectedVal;

      const isDayPass = selectedVal.startsWith('pasadia-');
      this.formData.isDayPass = isDayPass;

      const dayPass = siteConfig.dayPasses?.find(d => d.id === selectedVal);
      const cabin = siteConfig.cabins?.find(c => c.id === selectedVal);

      if (dayPass) {
        this.formData.cabinName = dayPass.name;
      } else if (cabin) {
        this.formData.cabinName = cabin.name;
        if (selectedVal === 'cabana-familiar-plan-familiar') {
          this.formData.guests = '4';
          if (guestsSelect) guestsSelect.value = '4';
        }
      } else {
        this.formData.cabinName = 'Cualquiera disponible / Asesoría';
      }

      // Actualizar campos de fecha según sea pasadía o noche
      if (isDayPass) {
        if (checkoutGroup) checkoutGroup.style.display = 'none';
        if (datesRow) datesRow.style.gridTemplateColumns = '1fr';
        const checkinLabel = this.modalEl.querySelector('label[for="consult-checkin"]');
        if (checkinLabel) checkinLabel.innerHTML = 'Fecha del Pasadía (Lunes a Jueves) <span class="required-star">*</span>';
        if (this.formData.checkin) this.formData.checkout = this.formData.checkin;
        if (submitBtn) submitBtn.textContent = 'Consultar pasadía por WhatsApp';
      } else {
        if (checkoutGroup) checkoutGroup.style.display = 'flex';
        if (datesRow) datesRow.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        const checkinLabel = this.modalEl.querySelector('label[for="consult-checkin"]');
        if (checkinLabel) checkinLabel.innerHTML = 'Fecha de llegada (Check-in) <span class="required-star">*</span>';
        if (submitBtn) submitBtn.textContent = 'Enviar consulta por WhatsApp';
      }

      this.updateLiveQuote();
    });

    // Huéspedes
    guestsSelect.addEventListener('change', () => {
      this.formData.guests = guestsSelect.value;
      this.updateLiveQuote();
    });

    // Transporte
    transportCheck.addEventListener('change', () => {
      this.formData.includeTransport = transportCheck.checked;
      this.updateLiveQuote();
    });

    // Decoración Especial
    const decorationCheck = this.modalEl.querySelector('#consult-decoration');
    if (decorationCheck) {
      decorationCheck.addEventListener('change', () => {
        this.formData.includeDecoration = decorationCheck.checked;
        this.updateLiveQuote();
      });
    }

    // Envío del formulario
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const checkin = checkinInput.value;
      const isDayPass = this.formData.isDayPass || (this.formData.cabinId && this.formData.cabinId.startsWith('pasadia-'));
      const checkout = isDayPass ? checkin : (checkoutInput ? checkoutInput.value : '');
      const contactName = nameInput.value.trim();
      const contactPhone = phoneInput.value.trim();
      const message = messageInput ? messageInput.value.trim() : '';

      let valid = true;

      if (!checkin) {
        checkinInput.classList.add('input-error');
        valid = false;
      } else {
        checkinInput.classList.remove('input-error');
      }

      if (!isDayPass) {
        if (!checkout || checkout <= checkin) {
          checkoutInput?.classList.add('input-error');
          valid = false;
        } else {
          checkoutInput?.classList.remove('input-error');
        }
      }

      if (!contactName) {
        nameInput.classList.add('input-error');
        valid = false;
      } else {
        nameInput.classList.remove('input-error');
      }

      if (!contactPhone) {
        phoneInput.classList.add('input-error');
        valid = false;
      } else {
        phoneInput.classList.remove('input-error');
      }

      if (!valid) return;

      this.formData.checkin = checkin;
      this.formData.checkout = checkout;
      this.formData.guests = guestsSelect.value;
      this.formData.contactName = contactName;
      this.formData.contactPhone = contactPhone;
      this.formData.includeTransport = transportCheck.checked;
      this.formData.includeDecoration = decorationCheck ? decorationCheck.checked : false;
      this.formData.message = message;

      // Generar y enviar a WhatsApp
      this.submitToWhatsApp();
    });
  }

  submitToWhatsApp() {
    const costInfo = this.calculateBookingCost();
    const guestsLabel = this.formData.guests === '4'
      ? '4 personas (Plan Familiar)'
      : (this.formData.guests === '2'
        ? '2 personas (Plan Pareja)'
        : (this.formData.guests === '1' ? '1 persona' : `${this.formData.guests} personas`));
    const isDayPass = this.formData.isDayPass || (this.formData.cabinId && this.formData.cabinId.startsWith('pasadia-'));

    let msg = '';

    if (isDayPass) {
      msg = `✨ *Consulta de Pasadía - El Ventanal al Cielo* ✨🌿\n`;
      msg += `📍 La Buitrera de Palmira, Valle del Cauca\n\n`;
      msg += `👤 *Titular:* ${this.formData.contactName}\n`;
      msg += `📱 *WhatsApp:* ${this.formData.contactPhone}\n`;
      msg += `💎 *Plan:* ${this.formData.cabinName}\n`;
      msg += `📅 *Fecha solicitada:* ${formatSpanishDate(this.formData.checkin)}\n`;
      msg += `🕗 *Horario:* 8:00 a. m. a 4:00 p. m. (Lunes a Jueves)\n`;
      msg += `🌅 *Modalidad:* Disfrute durante el día, sin hospedaje nocturno\n`;
      msg += `👥 *Huéspedes:* ${guestsLabel}\n`;
      if (costInfo) {
        msg += `💰 *Tarifa pasadía:* ${costInfo.totalCostFormatted} COP\n`;
        msg += `💳 *Anticipo requerido (50%):* ${costInfo.advanceAmountFormatted} COP\n`;
      }
      if (this.formData.includeTransport) {
        msg += `🚗 *Transporte adicional:* Sí, recogida desde Parque de La Buitrera (+$60.000 pareja)\n`;
      } else {
        msg += `🚗 *Transporte:* Por cuenta propia (Parqueadero privado gratuito)\n`;
      }
      if (this.formData.includeDecoration) {
        msg += `✨ *Decoración especial:* Sí ($80.000 - incluye pétalos, letrero, globos, letrero con luz y velas)\n`;
      }
      if (this.formData.message) {
        msg += `💬 *Comentario / Solicitud:* ${this.formData.message}\n`;
      }
      msg += `\n📲 *Pago Nequi:* 3183831095\n`;
      msg += `📸 *Comprobante:* Adjunto a continuación la captura de pantalla de la transferencia del anticipo para apartar la fecha.\n`;
      msg += `\n¡Hola! He generado mi consulta de pasadía y adjunto mi comprobante para apartar el cupo. ¡Muchas gracias!`;
    } else {
      const checkInTime = costInfo ? costInfo.checkInTime : '3:00 pm';
      const checkOutTime = costInfo ? costInfo.checkOutTime : '1:00 pm';

      msg = `🌄 *Consulta de Reserva - El Ventanal al Cielo*\n`;
      msg += `📍 La Buitrera de Palmira, Valle del Cauca\n\n`;
      msg += `👤 *Titular:* ${this.formData.contactName}\n`;
      msg += `📱 *WhatsApp:* ${this.formData.contactPhone}\n`;
      msg += `🛖 *Alojamiento:* ${this.formData.cabinName}\n`;
      msg += `📅 *Llegada:* ${formatSpanishDate(this.formData.checkin)} (Check-in ${checkInTime})\n`;
      msg += `📆 *Salida:* ${formatSpanishDate(this.formData.checkout)} (Check-out ${checkOutTime})\n`;
      if (costInfo) {
        msg += `🌙 *Duración:* ${costInfo.totalNights} noche${costInfo.totalNights > 1 ? 's' : ''}\n`;
        msg += `💰 *Tarifa estimada:* ${costInfo.totalCostFormatted} COP\n`;
        msg += `💳 *Anticipo requerido (50%):* ${costInfo.advanceAmountFormatted} COP\n`;
      }
      msg += `👥 *Huéspedes:* ${guestsLabel}\n`;
      if (this.formData.includeTransport) {
        msg += `🚗 *Transporte adicional:* Sí, recogida desde Parque de La Buitrera (+$60.000 pareja)\n`;
      } else {
        msg += `🚗 *Transporte:* Por cuenta propia (Parqueadero privado gratuito en el glamping)\n`;
      }
      if (this.formData.includeDecoration) {
        msg += `✨ *Decoración especial:* Sí ($80.000 - incluye pétalos, letrero, globos, letrero con luz y velas)\n`;
      }
      if (this.formData.message) {
        msg += `💬 *Comentario / Solicitud:* ${this.formData.message}\n`;
      }
      msg += `\n📲 *Pago Nequi:* 3183831095\n`;
      msg += `📸 *Comprobante:* Adjunto a continuación la captura de pantalla de la transferencia del anticipo para apartar las fechas.\n`;
      msg += `\n¡Hola! He generado mi consulta de estadía y adjunto mi comprobante de Nequi para apartar las fechas. ¡Muchas gracias!`;
    }

    const encodedMsg = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodedMsg}`;

    this.lastWhatsappUrl = whatsappUrl;
    this.lastSummaryText = msg;

    // Abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');

    // Cambiar vista del modal a confirmación
    this.currentView = 'success';
    this.renderSuccessView();
  }

  renderSuccessView() {
    const badge = this.modalEl.querySelector('#booking-step-badge');
    const title = this.modalEl.querySelector('#booking-modal-title');
    const container = this.modalEl.querySelector('#booking-modal-content');
    const costInfo = this.calculateBookingCost();
    const isDayPass = this.formData.isDayPass || (this.formData.cabinId && this.formData.cabinId.startsWith('pasadia-'));

    badge.textContent = 'Paso Final · Envío de Comprobante';
    title.textContent = '¡Tu solicitud fue enviada a WhatsApp!';

    const advanceFormatted = costInfo ? costInfo.advanceAmountFormatted : 'el 50% de anticipo';

    container.innerHTML = `
      <div style="text-align: center; padding: 0.25rem 0 1rem;">
        <!-- Icono Éxito -->
        <div style="width: 4rem; height: 4rem; border-radius: 50%; background: rgba(37, 211, 102, 0.12); color: #1EBE5D; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; box-shadow: 0 0 0 8px rgba(37, 211, 102, 0.06);">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <p style="max-width: 520px; margin: 0 auto 1.15rem; font-size: var(--text-base); color: var(--text-main); line-height: 1.55;">
          ¡Tu mensaje fue preparado y abierto en WhatsApp! Sigue estos <strong>3 sencillos pasos</strong> para bloquear tu fecha en el calendario oficial:
        </p>

        <!-- Tarjeta Nequi Oficial -->
        <div class="nequi-card" style="max-width: 520px; margin: 0 auto 1.25rem; text-align: left; padding: 1.15rem 1.35rem;">
          <div class="nequi-header">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #FF007A; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.8rem; color: #FFFFFF;">
                N
              </div>
              <span style="font-weight: 700; font-size: 0.85rem; letter-spacing: 0.03em;">Cuenta Nequi Oficial</span>
            </div>
            <span class="nequi-badge" style="background: rgba(255, 0, 122, 0.3); color: #FFF; border: 1px solid rgba(255, 0, 122, 0.5);">
              Anticipo 50%
            </span>
          </div>

          <div class="nequi-number-row" style="flex-wrap: wrap; gap: 0.5rem; padding: 0.65rem 1rem;">
            <div>
              <span style="display: block; font-size: 0.65rem; color: rgba(255,255,255,0.7); text-transform: uppercase;">Número de celular</span>
              <span class="nequi-number" style="font-size: 1.25rem;">${siteConfig.brand.nequiNumber}</span>
            </div>
            <button type="button" class="btn-copy-nequi" data-copy-nequi-action style="cursor: pointer;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copiar número</span>
            </button>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed rgba(255,255,255,0.18); padding-top: 0.65rem; font-size: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <span style="color: rgba(255,255,255,0.85);">Monto del anticipo a transferir:</span>
            <strong style="color: var(--c-solar-gold); font-size: 1.05rem; font-family: var(--font-serif);">${advanceFormatted} COP</strong>
          </div>
        </div>

        <!-- 3 Pasos Clave -->
        <div class="booking-steps-timeline" style="max-width: 520px; margin: 0 auto 1.35rem;">
          <div class="booking-step-item">
            <span class="booking-step-num">1</span>
            <div>
              <strong style="color: var(--c-earth-brown); display: block;">Transfiere el 50% por Nequi</strong>
              <span style="color: var(--text-muted);">Transfiere <strong>${advanceFormatted}</strong> al Nequi <strong>${siteConfig.brand.nequiNumber}</strong>.</span>
            </div>
          </div>

          <div class="booking-step-item">
            <span class="booking-step-num">2</span>
            <div>
              <strong style="color: var(--c-earth-brown); display: block;">Toma captura de pantalla</strong>
              <span style="color: var(--text-muted);">Guarda la imagen del comprobante de transferencia exitosa en tu teléfono.</span>
            </div>
          </div>

          <div class="booking-step-item" style="background: rgba(37, 211, 102, 0.08); border-color: rgba(37, 211, 102, 0.3);">
            <span class="booking-step-num" style="background: #25D366;">3</span>
            <div>
              <strong style="color: #1E7E34; display: block;">Adjunta la captura en WhatsApp</strong>
              <span style="color: #1E7E34;">Envía la imagen en el chat oficial de WhatsApp. ¡Validamos tu pago y apartamos la fecha de inmediato!</span>
            </div>
          </div>
        </div>

        <!-- Resumen compacto de la reserva -->
        <div class="doppelrand-shell" style="max-width: 520px; margin: 0 auto 1.35rem; text-align: left;">
          <div class="doppelrand-core" style="padding: 1rem 1.25rem; font-size: var(--text-xs); line-height: 1.6;">
            <p style="margin: 0 0 0.25rem;"><strong>Titular:</strong> ${this.formData.contactName} (${this.formData.contactPhone})</p>
            <p style="margin: 0 0 0.25rem;"><strong>Plan solicitado:</strong> ${this.formData.cabinName}</p>
            ${isDayPass
              ? `<p style="margin: 0 0 0.25rem;"><strong>Fecha:</strong> ${formatSpanishDate(this.formData.checkin)} (8:00 a. m. a 4:00 p. m. · Sin pernoctar)</p>`
              : `<p style="margin: 0 0 0.25rem;"><strong>Fechas:</strong> ${formatSpanishDate(this.formData.checkin)} al ${formatSpanishDate(this.formData.checkout)} ${costInfo ? `(${costInfo.totalNights} noche${costInfo.totalNights > 1 ? 's' : ''})` : ''}</p>
                 <p style="margin: 0 0 0.25rem;"><strong>Horarios:</strong> Check-in ${costInfo ? costInfo.checkInTime : '3:00 pm'} · Check-out ${costInfo ? costInfo.checkOutTime : '1:00 pm'}</p>`
            }
            ${costInfo ? `<p style="margin: 0 0 0.25rem;"><strong>Tarifa total:</strong> <span style="color: var(--c-orange-sunset); font-weight: 700;">${costInfo.totalCostFormatted} COP</span> (Anticipo 50%: ${costInfo.advanceAmountFormatted})</p>` : ''}
            ${this.formData.includeTransport ? '<p style="margin: 0 0 0.25rem; color: #1E7E34;"><strong>Transporte:</strong> Sí, recogida desde el Parque de La Buitrera.</p>' : ''}
            ${this.formData.includeDecoration ? '<p style="margin: 0 0 0.25rem; color: var(--c-orange-sunset);"><strong>Decoración:</strong> Sí ($80.000 · pétalos, letrero, globos, letrero con luz y velas).</p>' : ''}
          </div>
        </div>

        <!-- Botones de Acción -->
        <div style="display: flex; flex-direction: column; gap: 0.75rem; max-width: 440px; margin: 0 auto;">
          <a href="${this.lastWhatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-luxury btn-whatsapp" style="justify-content: center; padding: 0.95rem 1.5rem; text-decoration: none; font-weight: 700; gap: 0.65rem;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.074-2.18-.544-1.898-.79-3.119-2.73-3.214-2.856-.095-.127-.77-1.026-.77-1.956 0-.931.488-1.387.662-1.576.174-.188.38-.236.507-.236.126 0 .253.002.364.007.118.006.275-.045.43.328.16.386.544 1.328.592 1.425.048.097.08.21.016.337-.064.127-.096.206-.19.317-.096.111-.202.248-.288.334-.096.095-.196.198-.084.39.111.191.494.814 1.06 1.318.729.648 1.343.85 1.534.945.19.095.302.079.414-.048.112-.127.476-.556.603-.746.127-.19.254-.159.429-.095.174.064 1.11.523 1.3.618.19.095.317.143.365.222.047.079.047.46-.097.865z"/>
            </svg>
            <span>Abrir WhatsApp y adjuntar captura</span>
          </a>

          <div style="display: flex; gap: 0.75rem;">
            <button type="button" class="btn-luxury btn-secondary" id="btn-copy-consult-msg" style="flex: 1; justify-content: center; font-size: var(--text-xs);">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>Copiar mensaje</span>
            </button>

            <button type="button" class="btn-luxury btn-secondary" id="btn-edit-consult" style="flex: 1; justify-content: center; font-size: var(--text-xs);">
              <span>Editar consulta</span>
            </button>
          </div>

          <button type="button" class="btn-luxury btn-secondary" id="btn-finish-consult" style="justify-content: center; font-size: var(--text-xs); border: none; background: transparent; color: var(--text-muted); text-decoration: underline;">
            <span>Cerrar y volver al sitio</span>
          </button>
        </div>
      </div>
    `;

    this.bindSuccessEvents();
  }

  bindSuccessEvents() {
    const copyBtn = this.modalEl.querySelector('#btn-copy-consult-msg');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        copyToClipboard(this.lastSummaryText, copyBtn);
      });
    }

    const editBtn = this.modalEl.querySelector('#btn-edit-consult');
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        this.currentView = 'form';
        this.renderFormView();
      });
    }

    const finishBtn = this.modalEl.querySelector('#btn-finish-consult');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
