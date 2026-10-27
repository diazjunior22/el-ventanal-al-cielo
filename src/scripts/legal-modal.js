/**
 * MODAL LEGAL Y POLÍTICA DE DATOS PERSONALES (HABEAS DATA - LEY 1581 DE 2012)
 * Información transparente para el usuario conforme a la normativa colombiana
 */

export class LegalModal {
  constructor() {
    this.modalEl = null;
    this.init();
  }

  init() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'legal-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    overlay.innerHTML = `
      <div class="modal-container doppelrand-shell" style="max-width: 800px;">
        <div class="doppelrand-core" style="padding: 0; overflow: hidden;">
          <div class="modal-header">
            <div>
              <span class="eyebrow-tag eyebrow-tag-sunset">Marco Normativo Colombia</span>
              <h2 class="modal-title font-serif" id="legal-modal-title" style="margin-top: 0.25rem;">Tratamiento de Datos Personales</h2>
            </div>
            <button type="button" class="modal-close-btn" id="btn-close-legal-modal" aria-label="Cerrar modal legal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          <div class="modal-body" id="legal-modal-body" style="padding: 2rem;">
            <!-- Contenido cargado dinámicamente -->
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalEl = overlay;

    overlay.querySelector('#btn-close-legal-modal').addEventListener('click', () => this.close());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        this.close();
      }
    });

    // Enlazar gatillos
    document.querySelectorAll('[data-open-privacy]').forEach(btn => {
      btn.addEventListener('click', () => this.openPrivacy());
    });
    document.querySelectorAll('[data-open-terms]').forEach(btn => {
      btn.addEventListener('click', () => this.openTerms());
    });
  }

  openPrivacy() {
    this.modalEl.querySelector('#legal-modal-title').textContent = 'Política de Tratamiento de Datos Personales';
    this.modalEl.querySelector('#legal-modal-body').innerHTML = `
      <div style="font-size: var(--text-sm); line-height: 1.7; color: var(--text-main);">
        <p style="margin-bottom: 1rem;">
          En cumplimiento de la <strong>Ley Estatutaria 1581 de 2012</strong>, el <strong>Decreto 1377 de 2013</strong> y demás normas concordantes de la República de Colombia, <strong>El Ventanal al Cielo</strong> informa a los usuarios y huéspedes sobre el tratamiento de sus datos personales.
        </p>

        <h4 style="font-size: 1rem; color: var(--c-earth-brown); margin: 1.25rem 0 0.5rem;">1. Finalidades de la Recolección</h4>
        <p style="margin-bottom: 0.75rem;">Los datos solicitados (nombres completos, números de identificación, fechas de nacimiento, contacto telefónico, correo electrónico y ciudad de origen) son recolectados con las siguientes finalidades exclusivas:</p>
        <ul style="padding-left: 1.5rem; margin-bottom: 1rem;">
          <li>Formalización y coordinación de la solicitud de hospedaje.</li>
          <li>Activación de la póliza de seguro médico y asistencia al huésped durante su estancia.</li>
          <li>Gestión de contacto directo para orientación sobre la llegada a La Buitrera de Palmira.</li>
          <li>Cumplimiento de las obligaciones legales aplicables a establecimientos de hospedaje en Colombia.</li>
        </ul>

        <h4 style="font-size: 1rem; color: var(--c-earth-brown); margin: 1.25rem 0 0.5rem;">2. Carácter Sensible y Protección de Datos</h4>
        <p style="margin-bottom: 1rem;">
          El establecimiento reconoce que los números de identificación y fechas de nacimiento constituyen datos privados. El Ventanal al Cielo no comparte, vende ni transfiere esta información a terceros comerciales, ni incluye datos de identificación en parámetros abiertos de enlaces o analíticas web.
        </p>

        <h4 style="font-size: 1rem; color: var(--c-earth-brown); margin: 1.25rem 0 0.5rem;">3. Derechos del Titular (Habeas Data)</h4>
        <p style="margin-bottom: 0.75rem;">Como titular de los datos, usted tiene derecho a:</p>
        <ul style="padding-left: 1.5rem; margin-bottom: 1rem;">
          <li>Conocer, actualizar y rectificar sus datos personales.</li>
          <li>Revocar la autorización o solicitar la supresión de sus datos cuando no exista un deber legal o contractual de conservarlos.</li>
          <li>Presentar solicitudes y consultas ante el responsable del tratamiento.</li>
        </ul>

        <div style="background: rgba(242, 140, 40, 0.08); padding: 1rem; border-radius: var(--radius-inner-sm); border: 1px dashed rgba(242, 140, 40, 0.4); margin-top: 1.5rem;">
          <p style="font-size: var(--text-xs); margin: 0; color: var(--c-earth-brown);">
            <strong>Nota de integridad legal:</strong> El presente texto constituye un marco de información y buenas prácticas para la plataforma web. La versión final formal está sujeta a la revisión y aprobación definitiva por parte del propietario del establecimiento.
          </p>
        </div>
      </div>
    `;
    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  openTerms() {
    this.modalEl.querySelector('#legal-modal-title').textContent = 'Términos y Condiciones del Alojamiento';
    this.modalEl.querySelector('#legal-modal-body').innerHTML = `
      <div style="font-size: var(--text-sm); line-height: 1.7; color: var(--text-main);">
        <p style="margin-bottom: 1rem;">
          Bienvenido a <strong>El Ventanal al Cielo</strong>. Al solicitar una reserva, los huéspedes reconocen las siguientes condiciones generales:
        </p>

        <h4 style="font-size: 1rem; color: var(--c-earth-brown); margin: 1.25rem 0 0.5rem;">1. Solicitud y Confirmación de Reserva</h4>
        <p style="margin-bottom: 1rem;">
          El diligenciamiento del formulario web constituye una <u>solicitud preliminar</u>. La reserva solo queda formalmente confirmada cuando el establecimiento verifique la disponibilidad, valide el comprobante de anticipo del 50% vía Nequi (3183831095) y expida la notificación oficial de confirmación a través de su canal oficial de reservas (+57 318 055 6634).
        </p>

        <h4 style="font-size: 1rem; color: var(--c-earth-brown); margin: 1.25rem 0 0.5rem;">2. Cuidado del Entorno Natural</h4>
        <p style="margin-bottom: 1rem;">
          El alojamiento está ubicado en una zona de montaña y conservación natural en La Buitrera de Palmira. Se promueve el respeto a la fauna silvestre, el control de ruido y la preservación de la flora nativa.
        </p>

        <h4 style="font-size: 1rem; color: var(--c-earth-brown); margin: 1.25rem 0 0.5rem;">3. Políticas de Cancelación y Reprogramación</h4>
        <p style="margin-bottom: 1rem;">
          Las políticas específicas de cancelación, devoluciones o reprogramación de fechas están pendientes de estipulación oficial por el anfitrión y deben ser consultadas y concertadas directamente antes del pago del anticipo.
        </p>
      </div>
    `;
    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }
}
