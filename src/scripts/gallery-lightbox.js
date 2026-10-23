/**
 * GALERÍA EDITORIAL & LIGHTBOX ACCESIBLE - EL VENTANAL AL CIELO
 * Filtros de categoría, navegación por teclado (Esc, Flechas) y textos alternativos
 */

import { siteConfig } from '../data/site-data.js';

export class GalleryLightbox {
  constructor() {
    this.modalEl = null;
    this.currentIndex = 0;
    this.currentFilteredItems = [...siteConfig.galleryItems];
    this.init();
  }

  init() {
    this.renderLightboxModal();
    this.bindFilterEvents();
    this.bindKeyboardNav();
  }

  renderLightboxModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'gallery-lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Visor de imagen de galería');

    overlay.innerHTML = `
      <div style="position: relative; max-width: 1040px; width: 100%; max-height: 92dvh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <!-- Botón cerrar -->
        <button type="button" class="modal-close-btn" id="btn-close-lightbox" style="position: absolute; top: -3.5rem; right: 0; background: rgba(255,255,255,0.2); color: #FFFFFF;" aria-label="Cerrar visor">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <!-- Contenedor de Imagen -->
        <div class="doppelrand-shell" style="width: 100%; padding: 0.5rem; background: rgba(0,0,0,0.4); border-color: rgba(255,255,255,0.15);">
          <div class="doppelrand-core" style="padding: 0; background: #000000; overflow: hidden; display: flex; align-items: center; justify-content: center; max-height: 75dvh;">
            <img id="lightbox-img" src="" alt="" style="max-width: 100%; max-height: 75dvh; object-fit: contain;">
          </div>
        </div>

        <!-- Barra inferior con título y controles -->
        <div style="width: 100%; display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; color: #FFFFFF;">
          <div style="text-align: left;">
            <h4 id="lightbox-title" style="color: #FFFFFF; font-size: var(--text-base); margin-bottom: 0.2rem;">Título</h4>
            <span id="lightbox-counter" style="font-size: var(--text-xs); color: rgba(255,255,255,0.7);">1 de 6</span>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button type="button" id="btn-lightbox-prev" class="btn-luxury btn-ghost-light" style="padding: 0.6rem 1rem;" aria-label="Imagen anterior">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button type="button" id="btn-lightbox-next" class="btn-luxury btn-ghost-light" style="padding: 0.6rem 1rem;" aria-label="Imagen siguiente">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.modalEl = overlay;

    overlay.querySelector('#btn-close-lightbox').addEventListener('click', () => this.close());
    overlay.querySelector('#btn-lightbox-prev').addEventListener('click', () => this.prev());
    overlay.querySelector('#btn-lightbox-next').addEventListener('click', () => this.next());

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });
  }

  bindFilterEvents() {
    const filterButtons = document.querySelectorAll('.btn-filter');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.filter;
        const items = document.querySelectorAll('.gallery-item');

        items.forEach(item => {
          const itemCat = item.dataset.category || '';
          if (cat === 'all' || itemCat.split(' ').includes(cat) || itemCat === cat) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });

        if (cat === 'all') {
          this.currentFilteredItems = [...siteConfig.galleryItems];
        } else {
          this.currentFilteredItems = siteConfig.galleryItems.filter(i => {
            const itemCat = i.category || '';
            return itemCat.split(' ').includes(cat) || itemCat === cat;
          });
        }
      });
    });

    // Conectar clics en items de galería y triggers personalizados (ej: Spotlight Yaguarundí, Aves de La Buitrera)
    document.querySelectorAll('.gallery-item, [data-open-gallery-id]').forEach(item => {
      const handleOpen = () => {
        const id = item.dataset.galleryId || item.dataset.openGalleryId;
        if (!id) return;
        // Asegurar que si el item no está en el filtro actual, se restablezca la lista completa
        if (!this.currentFilteredItems.some(i => i.id === id)) {
          this.currentFilteredItems = [...siteConfig.galleryItems];
        }
        const idx = this.currentFilteredItems.findIndex(i => i.id === id);
        if (idx !== -1) {
          this.open(idx);
        }
      };

      item.addEventListener('click', handleOpen);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });
    });
  }

  bindKeyboardNav() {
    document.addEventListener('keydown', (e) => {
      if (!this.modalEl.classList.contains('active')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }

  open(index) {
    this.currentIndex = index;
    this.updateContent();
    this.modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modalEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.currentFilteredItems.length) % this.currentFilteredItems.length;
    this.updateContent();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.currentFilteredItems.length;
    this.updateContent();
  }

  updateContent() {
    const item = this.currentFilteredItems[this.currentIndex];
    if (!item) return;

    const img = this.modalEl.querySelector('#lightbox-img');
    const title = this.modalEl.querySelector('#lightbox-title');
    const counter = this.modalEl.querySelector('#lightbox-counter');

    img.src = item.src;
    img.alt = item.alt;
    title.textContent = item.title;
    counter.textContent = `${this.currentIndex + 1} de ${this.currentFilteredItems.length}`;
  }
}
