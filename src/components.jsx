import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Gift,
  Headset,
  InstagramLogo,
  List,
  MagnifyingGlass,
  MapPin,
  ShoppingBagOpen,
  ShoppingCartSimple,
  Truck,
  X,
  YoutubeLogo,
} from "@phosphor-icons/react";
import { generatedAssets, routes } from "./data.js";

export const goTo = (path = "") => {
  window.location.hash = path ? `#/${path}` : "#/";
};

export function BrandMark({ light = false, className = "" }) {
  return (
    <img
      className={`brand-mark ${light ? "brand-mark--light" : ""} ${className}`}
      src={generatedAssets.wordmark}
      alt="PEACOCK"
      width="174"
      height="28"
    />
  );
}

export function Header({ current }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen || searchOpen);
    return () => document.body.classList.remove("is-locked");
  }, [menuOpen, searchOpen]);

  const submitSearch = (event) => {
    event.preventDefault();
    const trimmed = query.trim();
    goTo(trimmed ? `products?search=${encodeURIComponent(trimmed)}` : "products");
    setSearchOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <button className="brand-link" type="button" onClick={() => goTo("")} aria-label="홈으로 이동">
          <BrandMark />
        </button>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {routes.map((route) => (
            <button
              key={route.path}
              className={current === route.path ? "is-current" : ""}
              type="button"
              onClick={() => goTo(route.path)}
            >
              {route.label}
            </button>
          ))}
          <a href="https://store.emart.com" target="_blank" rel="noreferrer">매장안내</a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" onClick={() => setSearchOpen(true)} aria-label="제품 검색 열기">
            <MagnifyingGlass size={22} weight="regular" />
          </button>
          <button className="icon-button" type="button" onClick={() => setMenuOpen(true)} aria-label="전체 메뉴 열기">
            <List size={24} weight="regular" />
          </button>
        </div>
      </header>

      <div className={`menu-panel ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="menu-panel__head">
          <BrandMark />
          <button className="icon-button" type="button" onClick={() => setMenuOpen(false)} aria-label="전체 메뉴 닫기">
            <X size={25} />
          </button>
        </div>
        <div className="menu-panel__body">
          <p className="eyebrow">PEACOCK MENU</p>
          <nav aria-label="전체 메뉴">
            <button type="button" onClick={() => { goTo(""); setMenuOpen(false); }}>홈</button>
            {routes.map((route, index) => (
              <button key={route.path} type="button" onClick={() => { goTo(route.path); setMenuOpen(false); }}>
                <span>0{index + 1}</span>{route.label}
              </button>
            ))}
          </nav>
          <div className="menu-panel__note">
            <p>좋은 재료와 정성으로<br />일상의 식탁을 더 특별하게.</p>
            <button className="text-link" type="button" onClick={() => { goTo("products"); setMenuOpen(false); }}>
              모든 제품 보기 <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      {menuOpen && <button className="page-scrim" aria-label="메뉴 닫기" type="button" onClick={() => setMenuOpen(false)} />}

      <div className={`search-panel ${searchOpen ? "is-open" : ""}`} aria-hidden={!searchOpen}>
        <div className="search-panel__inner">
          <div className="search-panel__top">
            <p>무엇을 찾고 계신가요?</p>
            <button className="icon-button" type="button" onClick={() => setSearchOpen(false)} aria-label="검색 닫기"><X size={25} /></button>
          </div>
          <form onSubmit={submitSearch}>
            <input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="제품명을 검색해보세요" aria-label="제품 검색어" />
            <button type="submit" aria-label="검색"><MagnifyingGlass size={24} /></button>
          </form>
          <div className="search-panel__suggestions">
            <span>추천 검색어</span>
            {["티라미수", "짬뽕", "피자", "밀키트"].map((term) => (
              <button key={term} type="button" onClick={() => setQuery(term)}>{term}</button>
            ))}
          </div>
        </div>
      </div>
      {searchOpen && <button className="page-scrim page-scrim--search" aria-label="검색 닫기" type="button" onClick={() => setSearchOpen(false)} />}
    </>
  );
}

export function SectionHeading({ title, description, action, onAction, compact = false }) {
  return (
    <div className={`section-heading ${compact ? "section-heading--compact" : ""}`}>
      <div>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && (
        <button className="text-link" type="button" onClick={onAction}>
          {action} <ArrowRight size={18} />
        </button>
      )}
    </div>
  );
}

export function ProductCard({ product, onAdd, variant = "default" }) {
  return (
    <article className={`product-card product-card--${variant}`}>
      <button className="product-card__image" type="button" onClick={() => goTo("products")} aria-label={`${product.name} 자세히 보기`}>
        <img src={product.image} alt={product.name} loading="lazy" width="480" height="480" />
        {product.pack && <img className="product-card__pack" src={product.pack} alt="" loading="lazy" width="480" height="480" />}
      </button>
      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-card__meta">{product.meta}</p>
        <div className="product-card__bottom">
          <strong>{product.price}</strong>
          <button className="cart-button" type="button" onClick={() => onAdd?.(product)} aria-label={`${product.name} 담기`}>
            <ShoppingCartSimple size={19} />
          </button>
        </div>
      </div>
    </article>
  );
}

const footerGroups = [
  { title: "쇼핑 가이드", links: ["주문/배송", "교환/반품", "결제 안내", "매장 안내"] },
  { title: "회사 정보", links: ["회사 소개", "인재 채용", "투자 정보", "공지 사항"] },
  { title: "이용 약관", links: ["이용 약관", "개인정보 처리방침", "영상정보처리기기 운영관리 방침"] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="service-strip">
        <div><MapPin size={28} /><span><strong>STORE</strong>매장 찾기</span></div>
        <div><Headset size={28} /><span><strong>CUSTOMER CENTER</strong>고객센터</span></div>
        <div><Truck size={28} /><span><strong>DELIVERY</strong>배송 안내</span></div>
        <div><Gift size={28} /><span><strong>MEMBERSHIP</strong>이마트 e 멤버십</span></div>
      </div>
      <div className="footer-main">
        <div className="footer-contact">
          <p>고객센터</p>
          <strong>02-380-5678</strong>
          <span>평일 09:00 – 18:00<br />(토·일·공휴일 휴무)</span>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <strong>{group.title}</strong>
            {group.links.map((link) => <a href="#footer" key={link}>{link}</a>)}
          </div>
        ))}
        <div className="footer-brand">
          <BrandMark />
          <p>피코크는 신세계푸드와 이마트가<br />함께 만드는 프리미엄 식품 브랜드입니다.</p>
          <div>
            <a href="https://www.instagram.com/peacocktime/" target="_blank" rel="noreferrer" aria-label="인스타그램"><InstagramLogo size={22} /></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="유튜브"><YoutubeLogo size={22} /></a>
            <a href="https://store.emart.com" target="_blank" rel="noreferrer" aria-label="이마트몰"><ShoppingBagOpen size={22} /></a>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <span>© PEACOCK. All rights reserved.</span>
        <span>서울특별시 성동구 뚝섬로 377</span>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, description, image, imageAlt = "", dark = false }) {
  return (
    <section className={`page-hero ${dark ? "page-hero--dark" : ""}`}>
      <img src={image} alt={imageAlt} width="1920" height="650" />
      <div className="page-hero__content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-hero__description">{description}</p>}
      </div>
    </section>
  );
}

export function Toast({ message }) {
  return <div className={`toast ${message ? "is-visible" : ""}`} role="status" aria-live="polite">{message}</div>;
}
