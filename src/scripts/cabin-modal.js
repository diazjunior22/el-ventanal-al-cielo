/**
 * MODAL DE DETALLE DE CABAÑA - EL VENTANAL AL CIELO
 * Galería ampliada, especificaciones y amenities verificados vs por consultar
 */

import { siteConfig } from '../data/site-data.js';

export class CabinModal {
  constructor(bookingFlowInstance) {
    this.bookingFlow = bookingFlowInstance;
    this.modalEl = null;
    this.init();
  }

  init() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'cabin-detail-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    overlay.innerHTML = `
      <div class="modal-container doppelrand-shell" style="max-width: 860px;">
        <div class="doppelrand-core" style="padding: 0; overflow: hidden;">
          <div class="modal-header">
            <div>
              <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.25rem;">
                <span class="eyebrow-tag eyebrow-tag-sunset" id="cabin-modal-badge">Detalle de Alojamiento</span>
                <span id="cabin-modal-inventory" class="badge-inventory-limit" style="display: none;"></span>
              </div>
              <h2 class="modal-title font-serif" id="cabin-modal-title">Cabaña</h2>
            </div>
            <button type="button" class="modal-close-btn" id="btn-close-cabin-modal" aria-label="Cerrar detalle de cabaña">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div class="modal-body" id="cabin-modal-body" style="padding: 1.75rem;">
            <!-- Contenido dinámico de la cabaña -->
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalEl = overlay;

    overlay.querySelector('#btn-close-cabin-modal').addEventListener('click', () => this.close());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        this.close();
      }
    });
  }

  open(cabinId) {
    const cabin = siteConfig.cabins.find(c => c.id === cabinId);
    if (!cabin) return;

    this.modalEl.querySelector('#cabin-modal-title').textContent = cabin.name;
    this.modalEl.querySelector('#cabin-modal-badge').textContent = cabin.tag;

    const invBadgeEl = this.modalEl.querySelector('#cabin-modal-inventory');
    if (invBadgeEl && cabin.inventoryBadge) {
      invBadgeEl.textContent = cabin.inventoryBadge;
      invBadgeEl.className = cabin.id === 'cabana-familiar-plan-familiar' ? 'badge-inventory-shared' : 'badge-inventory-limit';
      invBadgeEl.style.display = 'inline-flex';
    } else if (invBadgeEl) {
      invBadgeEl.style.display = 'none';
    }

    const galleryThumbnails = cabin.gallery.map((imgUrl, idx) => `
      <button type="button" class="cabin-thumb-btn ${idx === 0 ? 'active' : ''}" data-main-img="${imgUrl}" style="border: 2px solid ${idx === 0 ? 'var(--c-orange-sunset)' : 'transparent'}; border-radius: var(--radius-inner-sm); overflow: hidden; padding: 0; width: 80px; height: 56px; cursor: pointer; flex-shrink: 0;">
        <img src="${imgUrl}" alt="Vista miniatura ${idx + 1}" style="width: 100%; height: 100%; object-fit: cover;">
      </button>
    `).join('');

    const confirmedList = cabin.amenitiesConfirmed.map(item => `
      <li style="display: flex; align-items: center; gap: 0.5rem; font-size: var(--text-sm); margin-bottom: 0.5rem;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${item}</span>
      </li>
    `).join('');

    const toConsultList = cabin.amenitiesToConsult.map(item => `
      <li style="display: flex; align-items: center; gap: 0.5rem; font-size: var(--text-sm); margin-bottom: 0.5rem; color: var(--text-muted);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--c-window-gray)" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        <span>${item} (Consultar)</span>
      </li>
    `).join('');

    const sharedNoticeHtml = cabin.id === 'cabana-familiar-plan-familiar' ? `
      <div style="background: rgba(138, 75, 175, 0.07); border-left: 3px solid #7B1FA2; padding: 0.75rem 1rem; border-radius: var(--radius-inner-sm); font-size: var(--text-xs); color: #5B137A; line-height: 1.55; margin-top: 0.65rem;">
        <strong>ℹ️ Nota de cupo compartido:</strong> Esta modalidad familiar se acondiciona sobre una de nuestras 3 Cabañas VIP. Su disponibilidad en el calendario depende de contar con al menos una cabaña VIP libre para tu fecha.
      </div>
    ` : '';

    this.modalEl.querySelector('#cabin-modal-body').innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- Imagen Principal de la Cabaña -->
        <div style="border-radius: var(--radius-inner-md); overflow: hidden; aspect-ratio: 16 / 9; max-height: 380px;">
          <img id="cabin-modal-main-img" src="${cabin.image}" alt="${cabin.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>

        <!-- Miniaturas de Galería -->
        <div style="display: flex; gap: 0.75rem; overflow-x: auto; padding-bottom: 0.5rem;">
          ${galleryThumbnails}
        </div>

        <!-- Descripción -->
        <div>
          <h3 class="font-serif" style="font-size: var(--text-xl); margin-bottom: 0.5rem; color: var(--c-earth-brown);">Sobre este espacio</h3>
          <p style="font-size: var(--text-base); line-height: 1.7; margin-bottom: 0;">${cabin.longDescription}</p>
          ${sharedNoticeHtml}
        </div>

        <!-- Características y Especificaciones -->
        <div class="doppelrand-shell">
          <div class="doppelrand-core" style="padding: 1.25rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem; font-size: var(--text-sm);">
              <div>
                <strong>Capacidad:</strong>
                <p style="margin: 0; font-size: var(--text-xs); color: var(--text-muted);">${cabin.specs.capacity}</p>
              </div>
              <div>
                <strong>Acomodación:</strong>
                <p style="margin: 0; font-size: var(--text-xs); color: var(--text-muted);">${cabin.specs.bedType}</p>
              </div>
              <div>
                <strong>Horarios:</strong>
                <p style="margin: 0; font-size: var(--text-xs); color: var(--text-muted);">Check-in ${cabin.specs.checkIn} · Check-out ${cabin.specs.checkOut}</p>
              </div>
              <div>
                <strong>Paisaje y Clima:</strong>
                <p style="margin: 0; font-size: var(--text-xs); color: var(--text-muted);">${cabin.specs.view} · ${cabin.specs.climate}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Amenities: Confirmados vs Por Consultar -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
          <div>
            <h4 style="font-size: var(--text-base); margin-bottom: 0.75rem; color: #2E7D32; display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge-confirmed">Comodidades y servicios incluidos</span>
            </h4>
            <ul style="list-style: none; padding: 0;">
              ${confirmedList}
            </ul>
          </div>
          <div>
            <h4 style="font-size: var(--text-base); margin-bottom: 0.75rem; color: var(--c-window-gray); display: flex; align-items: center; gap: 0.5rem;">
              <span class="badge-pending">Servicios adicionales a consultar</span>
            </h4>
            <ul style="list-style: none; padding: 0;">
              ${toConsultList}
            </ul>
          </div>
        </div>

        <!-- Nota de Tarifa y Botón de Reserva -->
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
          <div>
            <span class="badge-confirmed" style="font-size: 0.8rem; margin-bottom: 0.25rem; background: rgba(242, 140, 40, 0.12); color: #C8690F; border-color: rgba(242, 140, 40, 0.3);">
              ${cabin.rateInfo.displayRate}
            </span>
            <p style="font-size: var(--text-xs); margin: 0; max-width: 420px; color: var(--text-muted);">${cabin.rateInfo.note}</p>
          </div>
          <button type="button" class="btn-luxury btn-primary" id="btn-modal-book-cabin" data-cabin-id="${cabin.id}">
            <span>Consultar disponibilidad</span>
            <span class="btn-icon-wrapper">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </button>
        </div>
      </div>
    `;

    // Conectar miniaturas
    const mainImg = this.modalEl.querySelector('#cabin-modal-main-img');
    const thumbBtns = this.modalEl.querySelectorAll('.cabin-thumb-btn');
    thumbBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        thumbBtns.forEach(b => b.style.borderColor = 'transparent');
        btn.style.borderColor = 'var(--c-orange-sunset)';
        mainImg.src = btn.dataset.mainImg;
      });
    });

    // Conectar botón de reserva
    this.modalEl.querySelector('#btn-modal-book-cabin').addEventListener('click', () => {
      this.close();
      if (this.bookingFlow) {
        this.bookingFlow.open(cabin.id);
      }
    });

    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }
}
