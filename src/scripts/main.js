/**
 * APLICACIÓN PRINCIPAL - EL VENTANAL AL CIELO
 * Inicialización de módulos, animaciones de entrada y enlaces interactivos
 */

import { siteConfig } from '../data/site-data.js';
import { BookingFlowModal } from './booking-flow.js';
import { CabinModal } from './cabin-modal.js';
import { GalleryLightbox } from './gallery-lightbox.js';
import { LegalModal } from './legal-modal.js';
import { copyToClipboard } from './copy-utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializar Modales y Controladores
  const bookingFlow = new BookingFlowModal();
  const cabinModal = new CabinModal(bookingFlow);
  const galleryLightbox = new GalleryLightbox();
  const legalModal = new LegalModal();

  // 2. Control de Barra de Navegación en Scroll
  const siteHeader = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // 3. Menú Móvil / Hamburguesa Accesible
  const btnHamburger = document.querySelector('#btn-hamburger');
  const mobileDrawer = document.querySelector('#mobile-drawer');
  const btnCloseDrawer = document.querySelector('#btn-close-drawer');
  const drawerBackdrop = document.querySelector('#mobile-drawer-backdrop');

  if (btnHamburger && mobileDrawer) {
    const openDrawer = () => {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      btnHamburger.classList.add('active');
      btnHamburger.setAttribute('aria-expanded', 'true');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      btnCloseDrawer?.focus();
    };

    const closeDrawer = () => {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      btnHamburger.classList.remove('active');
      btnHamburger.setAttribute('aria-expanded', 'false');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      btnHamburger.focus();
    };

    btnHamburger.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    btnCloseDrawer?.addEventListener('click', closeDrawer);
    drawerBackdrop?.addEventListener('click', closeDrawer);

    // Cerrar al pulsar Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Cerrar al hacer clic en cualquier enlace interno o botón del drawer
    mobileDrawer.querySelectorAll('.mobile-nav-links a, [data-open-booking]').forEach(item => {
      item.addEventListener('click', () => {
        closeDrawer();
      });
    });
  }

  // 4. Conectar Miniaturas del Showcase por cada alojamiento y Modales
  document.querySelectorAll('.cabin-featured-shell').forEach(shell => {
    const mainImg = shell.querySelector('.cabin-gallery-main img');
    const thumbItems = shell.querySelectorAll('.cabin-thumb-item');
    if (mainImg && thumbItems.length > 0) {
      thumbItems.forEach(thumb => {
        thumb.addEventListener('click', () => {
          thumbItems.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          const newSrc = thumb.dataset.imgSrc;
          if (newSrc) {
            mainImg.src = newSrc;
          }
        });
      });
    }
  });

  document.querySelectorAll('[data-open-cabin]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const cabinId = e.currentTarget.dataset.cabinId;
      cabinModal.open(cabinId);
    });
  });



  // 6. Conectar Acordeón de FAQs con Accesibilidad WAI-ARIA
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Cerrar otros acordeones si se prefiere
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
          otherItem.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false');
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // 7. Conectar Botones de Copiar Nequi y RNT
  document.querySelectorAll('[data-copy-nequi]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      copyToClipboard(siteConfig.brand.nequiNumber, e.currentTarget);
    });
  });

  document.querySelectorAll('[data-copy-rnt]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      copyToClipboard(siteConfig.brand.rntNumber || '226780', e.currentTarget);
    });
  });

  // 8. Animación sutil de entrada al scroll mediante IntersectionObserver
  if ('IntersectionObserver' in window) {
    const revealElements = document.querySelectorAll('.fade-on-scroll');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.15
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // 9. Slider de Desplazamiento Horizontal para Aves de La Buitrera (PC y Móvil)
  const birdsSlider = document.querySelector('#birds-gallery-grid');
  const prevBirdsBtns = document.querySelectorAll('.btn-birds-prev');
  const nextBirdsBtns = document.querySelectorAll('.btn-birds-next');

  if (birdsSlider && (prevBirdsBtns.length > 0 || nextBirdsBtns.length > 0)) {
    const getCardWidth = () => {
      const card = birdsSlider.querySelector('.bird-card');
      return card ? card.offsetWidth + 24 : 360;
    };

    const handleScroll = (direction) => {
      const scrollAmount = getCardWidth() * direction;
      birdsSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    prevBirdsBtns.forEach(btn => btn.addEventListener('click', () => handleScroll(-1)));
    nextBirdsBtns.forEach(btn => btn.addEventListener('click', () => handleScroll(1)));

    const updateNavState = () => {
      const maxScroll = birdsSlider.scrollWidth - birdsSlider.clientWidth;
      const atStart = birdsSlider.scrollLeft <= 10;
      const atEnd = birdsSlider.scrollLeft >= maxScroll - 10;

      prevBirdsBtns.forEach(btn => {
        btn.disabled = atStart;
        btn.classList.toggle('disabled', atStart);
      });
      nextBirdsBtns.forEach(btn => {
        btn.disabled = atEnd;
        btn.classList.toggle('disabled', atEnd);
      });
    };

    birdsSlider.addEventListener('scroll', updateNavState, { passive: true });
    window.addEventListener('resize', updateNavState, { passive: true });
    setTimeout(updateNavState, 150);
  }

  // 10. ScrollSpy: Indicador activo en el Navbar en toda la web
  const navSections = document.querySelectorAll('section[id], main[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-menu-desktop a[href^="#"]');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a[href^="#"]');

  if ('IntersectionObserver' in window && navSections.length > 0) {
    const scrollSpyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          if (!currentId) return;

          desktopNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });

          mobileNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    });

    navSections.forEach(section => scrollSpyObserver.observe(section));
  }

  // 11. Selector interactivo de Fotogramas de Fototrampeo Yaguarundí (CVC)
  const captureThumbs = document.querySelectorAll('.wildlife-capture-thumb');
  const telemetryFrame = document.querySelector('#wildlife-telemetry-frame');
  const telemetryImg = document.querySelector('#wildlife-telemetry-img');
  const telemetryMeta = document.querySelector('#wildlife-telemetry-meta span');
  const btnWildlifeDetail = document.querySelector('#btn-wildlife-detail');

  if (captureThumbs.length > 0 && telemetryImg) {
    captureThumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        captureThumbs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        thumb.classList.add('active');
        thumb.setAttribute('aria-selected', 'true');

        const newSrc = thumb.dataset.src;
        const newAlt = thumb.dataset.alt;
        const newGalleryId = thumb.dataset.galleryId;
        const newTelemetry = thumb.dataset.telemetry;

        if (newSrc) telemetryImg.src = newSrc;
        if (newAlt) telemetryImg.alt = newAlt;
        if (newGalleryId) {
          telemetryFrame?.setAttribute('data-open-gallery-id', newGalleryId);
          btnWildlifeDetail?.setAttribute('data-open-gallery-id', newGalleryId);
        }
        if (newTelemetry && telemetryMeta) {
          telemetryMeta.textContent = newTelemetry;
        }
      });
    });
  }
});

