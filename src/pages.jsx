import { useMemo, useState } from "react";
import {
  ArrowRight,
  ChefHat,
  ForkKnife,
  Heart,
  Leaf,
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react";
import {
  allProducts,
  bestProducts,
  brandImages,
  categoryCards,
  generatedAssets,
  gourmetImages,
  gourmetStories,
  homeProducts,
} from "./data.js";
import { PageHero, ProductCard, SectionHeading, goTo } from "./components.jsx";

const filters = ["ALL", "CAFE", "DINING", "CUPBOARD"];

function FilterChips({ value, onChange, counts }) {
  return (
    <div className="filter-chips" role="group" aria-label="제품 카테고리 필터">
      {filters.map((filter) => (
        <button
          key={filter}
          className={value === filter ? "is-active" : ""}
          type="button"
          onClick={() => onChange(filter)}
        >
          {filter === "ALL" ? "전체" : filter}
          {counts?.[filter] !== undefined && <span>{counts[filter]}</span>}
        </button>
      ))}
    </div>
  );
}

export function HomePage({ onAdd }) {
  const [filter, setFilter] = useState("ALL");
  const visible = homeProducts.filter((product) => filter === "ALL" || product.category === filter).slice(0, 5);

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">LIFE DELICIOUS</p>
          <h1>일상의 식탁을<br />더 특별하게, 피코크</h1>
          <p className="home-hero__description">좋은 재료와 정성으로 만든 맛있는 경험,<br />피코크가 제안하는 프리미엄 라이프스타일입니다.</p>
          <div className="home-hero__links">
            <span>오늘의 피코크</span>
            <button type="button" onClick={() => goTo("best")}>봄 제철 식재료로 즐기는 추천 메뉴 <ArrowRight size={17} /></button>
            <button type="button" onClick={() => goTo("gourmet")}>피크닉 & 브런치 기획전 <ArrowRight size={17} /></button>
          </div>
        </div>
        <div className="home-hero__media">
          <img src={generatedAssets.hero} alt="차돌 우동과 곁들임 요리" width="1600" height="1200" fetchPriority="high" />
          <p>NEW TABLE 01</p>
        </div>
      </section>

      <section className="section-shell category-section">
        <SectionHeading title="맛으로 고르는 카테고리" action="전체 카테고리 보기" onAction={() => goTo("products")} />
        <div className="category-grid">
          {categoryCards.map((category) => (
            <button className="category-card" type="button" key={category.label} onClick={() => goTo(`products?category=${category.label}`)}>
              <img src={category.image} alt="" width="849" height="538" loading="lazy" />
              <span className="category-card__copy">
                <strong>{category.label}</strong>
                <span>{category.title.split("\n").map((line) => <span key={line}>{line}</span>)}</span>
              </span>
              <span className="round-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
            </button>
          ))}
        </div>
      </section>

      <section className="section-shell best-section">
        <SectionHeading title="PEACOCK BEST" description="피코크에서 가장 사랑받는 메뉴를 만나보세요." action="더보기" onAction={() => goTo("best")} />
        <FilterChips value={filter} onChange={setFilter} />
        <div className="home-product-grid">
          {visible.map((product) => <ProductCard product={product} onAdd={onAdd} key={product.id} />)}
        </div>
      </section>

      <section className="section-shell recipe-section">
        <div className="recipe-intro">
          <p className="eyebrow">RECIPE PAIRING</p>
          <h2>레시피와 함께</h2>
          <p>피코크 제품으로<br />쉽게 완성하는 근사한 한 끼</p>
          <button className="outline-button" type="button" onClick={() => goTo("gourmet")}>레시피 더보기 <ArrowRight size={18} /></button>
        </div>
        <button className="recipe-card" type="button" onClick={() => goTo("gourmet")}>
          <img src={generatedAssets.recipe} alt="차돌 우동 레시피" width="1500" height="1000" loading="lazy" />
          <span><strong>차돌 우엉 우동</strong><small>프리미엄 한식 다이닝</small></span>
        </button>
        <div className="recipe-product">
          <img src={homeProducts[1].pack} alt="초마 짬뽕 패키지" width="480" height="480" loading="lazy" />
          <div><span>함께 즐겨보세요</span><strong>피코크 차돌 우동</strong><p>434g · 2인분</p></div>
          <strong>9,480원</strong>
        </div>
        <span className="recipe-plus" aria-hidden="true"><Plus size={22} /></span>
      </section>

      <section className="principles-section" style={{ backgroundImage: `url(${generatedAssets.principles})` }}>
        <div className="principles-intro">
          <p className="eyebrow">BRAND STORY</p>
          <h2>좋은 재료와 정직한 제조 원칙으로<br />피코크의 식문화를 만듭니다.</h2>
          <button className="text-link text-link--light" type="button" onClick={() => goTo("brand")}>브랜드 스토리 보기 <ArrowRight size={18} /></button>
        </div>
        <div className="principles-grid">
          <div><Leaf size={34} /><strong>좋은 재료</strong><span>엄선한 원재료로<br />믿을 수 있는 맛</span></div>
          <div><ChefHat size={34} /><strong>정확한 제조</strong><span>철저한 품질 관리와<br />안심할 수 있는 식탁</span></div>
          <div><ForkKnife size={34} /><strong>맛의 밸런스</strong><span>익숙함과 새로움의<br />조화로운 레시피</span></div>
          <div><Heart size={34} /><strong>일상의 가치</strong><span>매일의 한 끼를 만드는<br />진심 어린 기준</span></div>
        </div>
      </section>

      <section className="section-shell gourmet-section">
        <SectionHeading title="GOURMET" description="피코크가 전하는 미식의 영감과 정보" action="모든 스토리 보기" onAction={() => goTo("gourmet")} />
        <div className="story-grid">
          {gourmetStories.map((story) => (
            <button className="story-card" type="button" onClick={() => goTo("gourmet")} key={story.title}>
              <img src={story.image} alt="" width="849" height="538" loading="lazy" />
              <span><small>{story.eyebrow}</small><strong>{story.title}</strong><span>{story.description}</span></span>
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export function BrandPage() {
  return (
    <>
      <PageHero eyebrow="PEACOCK" title="BRAND STORY" description="맛있는 일상을 만드는 피코크의 생각" image={brandImages.hero} imageAlt="피코크 브랜드 스토리" dark />
      <section className="brand-manifesto section-shell section-shell--narrow">
        <p className="eyebrow">OUR MISSION</p>
        <h2>한 끼를 먹더라도<br /><strong>제대로 특별하게</strong> 즐기고 싶은 당신을 위해</h2>
        <p>피코크가 새로운 식문화 라이프스타일을 제안합니다.</p>
      </section>
      <section className="brand-split brand-split--history">
        <div className="brand-split__media"><img src={brandImages.history} alt="다양한 피코크 식품" width="1919" height="930" loading="lazy" /></div>
        <div className="brand-split__copy">
          <p className="eyebrow">SINCE 2014</p>
          <h2>좋은 한 끼를 향한<br />피코크의 시작</h2>
          <p>피코크는 2014년 1월 처음 출시된 프리미엄 식품 브랜드입니다. 식탁 위의 시간을 더 편리하고 근사하게 만드는 제품을 제안합니다.</p>
        </div>
      </section>
      <section className="brand-split brand-split--chef">
        <div className="brand-split__copy">
          <p className="eyebrow">TASTE FIRST</p>
          <h2>맛의 신세계</h2>
          <p>간편식이라도 제대로 된 한 끼를 제공하기 위해 국내 정상급 셰프와 함께 제품의 품질, 그중에서도 맛에 집중합니다.</p>
          <ul><li>셰프의 레시피 연구</li><li>엄선한 식재료</li><li>반복되는 관능 테스트</li></ul>
        </div>
        <div className="brand-split__media"><img src={brandImages.chef} alt="피코크 셰프의 조리 모습" width="1410" height="1040" loading="lazy" /></div>
      </section>
      <section className="lab-section section-shell">
        <SectionHeading title="맛의 혁신, 피코크 비밀 연구소" description="최초 아이디어부터 최종 상품화까지 한곳에서 완성합니다." />
        <div className="lab-grid">
          <figure><img src={brandImages.labA} alt="재료를 연구하는 피코크 연구소" width="840" height="835" loading="lazy" /><figcaption><span>01</span><strong>아이디어와 레시피</strong><p>셰프의 관점에서 익숙한 메뉴를 새롭게 해석합니다.</p></figcaption></figure>
          <figure><img src={brandImages.labB} alt="피코크 연구소 조리 공간" width="623" height="840" loading="lazy" /><figcaption><span>02</span><strong>제조 파트너십</strong><p>식품 전문 제조 기술을 가진 파트너와 더 믿을 수 있는 제품을 만듭니다.</p></figcaption></figure>
        </div>
      </section>
      <section className="section-shell brand-products">
        <SectionHeading title="PEACOCK PRODUCTS" description="어디에도 없는 고퀄리티의 가정간편식" action="제품 모두 보기" onAction={() => goTo("products")} />
        <div className="home-product-grid">{homeProducts.slice(0, 5).map((product) => <ProductCard product={product} key={product.id} />)}</div>
      </section>
    </>
  );
}

export function BestPage({ onAdd }) {
  const [filter, setFilter] = useState("ALL");
  const visible = bestProducts.filter((product) => filter === "ALL" || product.category === filter);
  const counts = filters.reduce((result, category) => ({ ...result, [category]: category === "ALL" ? bestProducts.length : bestProducts.filter((product) => product.category === category).length }), {});
  return (
    <>
      <PageHero eyebrow="CURATED FAVORITES" title="PEACOCK BEST" description="많은 사람들이 선택한 피코크의 대표 메뉴" image={`${import.meta.env.BASE_URL}assets/best/sub02-visual.webp`} imageAlt="피코크 베스트 제품" dark />
      <section className="section-shell listing-section">
        <SectionHeading title="가장 사랑받는 맛" description="지금 가장 인기 있는 피코크 제품을 확인해보세요." />
        <FilterChips value={filter} onChange={setFilter} counts={counts} />
        <div className="listing-grid">{visible.map((product) => <ProductCard product={product} onAdd={onAdd} key={product.id} variant="listing" />)}</div>
      </section>
    </>
  );
}

export function ProductsPage({ onAdd, initialCategory = "ALL", initialSearch = "" }) {
  const validCategory = filters.includes(initialCategory) ? initialCategory : "ALL";
  const [filter, setFilter] = useState(validCategory);
  const [query, setQuery] = useState(initialSearch);
  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("ko-KR");
    return allProducts.filter((product) => (filter === "ALL" || product.category === filter) && (!normalized || product.name.toLocaleLowerCase("ko-KR").includes(normalized)));
  }, [filter, query]);
  return (
    <>
      <PageHero eyebrow="PEACOCK COLLECTION" title="PRODUCTS" description="3가지 카테고리로 만나는 다채로운 피코크" image={`${import.meta.env.BASE_URL}assets/products/visual.webp`} imageAlt="피코크 제품 컬렉션" dark />
      <section className="section-shell listing-section product-listing">
        <div className="product-toolbar">
          <div><h2>전체 제품</h2><p>일상의 메뉴를 더 쉽고 맛있게 완성해보세요.</p></div>
          <label className="product-search"><MagnifyingGlass size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="제품 검색" /></label>
        </div>
        <FilterChips value={filter} onChange={setFilter} />
        <p className="result-count">{visible.length}개의 제품</p>
        {visible.length ? <div className="listing-grid listing-grid--products">{visible.map((product) => <ProductCard product={product} onAdd={onAdd} key={product.id} variant="listing" />)}</div> : <div className="empty-result"><strong>검색 결과가 없습니다.</strong><p>다른 제품명이나 카테고리를 선택해보세요.</p><button type="button" onClick={() => { setQuery(""); setFilter("ALL"); }}>전체 제품 보기</button></div>}
      </section>
    </>
  );
}

const gourmetTabs = [
  { id: "collab", label: "맛집콜라보", title: "초마", subtitle: "중식의 고수, 그만의 비법을 담아내다" },
  { id: "bistro", label: "피콕반점", title: "피콕반점", subtitle: "집에서 즐기는 제대로 된 중화요리" },
  { id: "mandu", label: "만두연구소", title: "만두연구소", subtitle: "한입에 담은 정직한 재료와 새로운 조합" },
];

export function GourmetPage() {
  const [tab, setTab] = useState(gourmetTabs[0]);
  return (
    <>
      <PageHero eyebrow="PEACOCK JOURNAL" title="GOURMET" description="피코크가 만난 셰프와 맛의 이야기" image={gourmetImages.hero} imageAlt="피코크 고메 컬렉션" dark />
      <section className="gourmet-journal section-shell">
        <div className="journal-tabs" role="tablist" aria-label="고메 이야기 카테고리">
          {gourmetTabs.map((item) => <button role="tab" aria-selected={tab.id === item.id} className={tab.id === item.id ? "is-active" : ""} type="button" key={item.id} onClick={() => setTab(item)}>{item.label}</button>)}
        </div>
        <div className="journal-intro">
          <p className="eyebrow">RESTAURANT COLLABORATION</p>
          <h1>{tab.title}</h1>
          <p>{tab.subtitle}</p>
        </div>
        <section className="journal-feature journal-feature--opening">
          <div><span>01</span><h2>전통을 새롭게 해석하다</h2><p>오랜 시간 쌓인 조리법을 오늘의 식탁에 맞게 다시 해석합니다. 셰프의 노하우와 피코크의 제품 연구가 만나 익숙하지만 새로운 맛을 완성했습니다.</p></div>
          <div className="journal-collage"><img src={gourmetImages.one} alt="초마 짬뽕" width="759" height="510" loading="lazy" /><img src={gourmetImages.two} alt="초마 짜장" width="600" height="452" loading="lazy" /></div>
        </section>
        <section className="journal-feature journal-feature--reverse">
          <img src={gourmetImages.three} alt="초마의 대표 요리" width="770" height="434" loading="lazy" />
          <div><span>02</span><h2>오직 이곳에서만 만날 수 있던 맛</h2><p>맑고 담백한 소스, 불맛을 살린 면과 깊은 육수. 매장에서 경험하던 시그니처 메뉴를 집에서도 간편하게 만날 수 있습니다.</p></div>
        </section>
        <section className="journal-feature journal-feature--tiles">
          <img src={gourmetImages.four} alt="초마 식당의 한 장면" width="543" height="542" loading="lazy" />
          <div><span>03</span><h2>하나의 트렌드가 되다</h2><p>사랑받는 맛집의 기준과 피코크의 상품화 노하우가 만나 더 많은 식탁으로 이어집니다.</p></div>
          <img src={gourmetImages.five} alt="초마의 조리 장면" width="676" height="446" loading="lazy" />
        </section>
        <section className="journal-products">
          <SectionHeading title="이제 피코크에서 만나보세요" description="맛집의 대표 메뉴를 간편하게 즐기는 방법" action="전체 제품 보기" onAction={() => goTo("products")} />
          <div className="home-product-grid">{homeProducts.slice(1, 4).map((product) => <ProductCard product={product} key={product.id} />)}</div>
        </section>
      </section>
    </>
  );
}
