const asset = (path) => `${import.meta.env.BASE_URL}assets/${path}`;

export const routes = [
  { path: "brand", label: "브랜드 스토리" },
  { path: "best", label: "베스트" },
  { path: "products", label: "제품" },
  { path: "gourmet", label: "고메" },
];

export const homeProducts = [
  { id: 1, name: "등심돈까스", meta: "600g · 2인분", price: "9,980원", category: "DINING", image: asset("products/pd_1.webp"), pack: asset("products/pd_1_pack.webp") },
  { id: 2, name: "초마 짬뽕", meta: "672g · 2인분", price: "8,980원", category: "DINING", image: asset("products/pd_2.webp"), pack: asset("products/pd_2_pack.webp") },
  { id: 3, name: "티라미수", meta: "150g · 1인분", price: "6,480원", category: "CAFE", image: asset("products/pd_3.webp"), pack: asset("products/pd_3_pack.webp") },
  { id: 4, name: "오뎅식당 부대찌개 밀키트", meta: "810g · 2–3인분", price: "11,980원", category: "DINING", image: asset("products/pd_4.webp"), pack: asset("products/pd_4_pack.webp") },
  { id: 5, name: "당근 케이크", meta: "500g · 1개", price: "7,980원", category: "CAFE", image: asset("products/pd_5.webp"), pack: asset("products/pd_5_pack.webp") },
  { id: 6, name: "마르게리따 피자", meta: "400g · 1판", price: "9,980원", category: "DINING", image: asset("products/pd_6.webp"), pack: asset("products/pd_6_pack.webp") },
  { id: 7, name: "계피 호떡", meta: "400g · 5개", price: "5,980원", category: "CAFE", image: asset("products/pd_7.webp"), pack: asset("products/pd_7_pack.webp") },
  { id: 8, name: "단호박죽", meta: "250g · 1인분", price: "4,980원", category: "CUPBOARD", image: asset("products/pd_8.webp"), pack: asset("products/pd_8_pack.webp") },
  { id: 9, name: "깊은 갈비탕", meta: "500g · 1인분", price: "10,980원", category: "DINING", image: asset("products/pd_9.webp"), pack: asset("products/pd_9_pack.webp") },
  { id: 10, name: "곤드레밥", meta: "500g · 2인분", price: "6,980원", category: "CUPBOARD", image: asset("products/pd_10.webp"), pack: asset("products/pd_10_pack.webp") },
];

export const categoryCards = [
  { label: "CAFE", title: "달콤한 디저트와\n향긋한 커피 타임", image: asset("home/c02_cafe.webp") },
  { label: "DINING", title: "간편하지만 근사한\n레스토랑의 맛", image: asset("home/c02_dining.webp") },
  { label: "CUPBOARD", title: "일상을 채우는\n피코크의 식재료", image: asset("home/c02_cupboard.webp") },
];

export const gourmetStories = [
  { eyebrow: "DESSERT", title: "봄을 닮은 디저트 테이블", description: "상큼한 치즈케이크와 함께하는 홈카페", image: asset("home/c02_cafe.webp") },
  { eyebrow: "PANTRY", title: "집에서 즐기는 시네마 간식", description: "고소하고 담백한 피코크 팝콘", image: asset("home/c02_cupboard.webp") },
  { eyebrow: "DINING", title: "레스토랑의 맛을 우리집 식탁으로", description: "간편하게 완성하는 크리미한 한 끼", image: asset("home/c02_dining.webp") },
];

export const instagramImages = Array.from({ length: 8 }, (_, index) => asset(`home/c05_${index + 1}.webp`));

export const bestProducts = [
  "진국삼계탕", "차돌박이 된장찌개", "쟌슨빌 소시지 부대찌개", "맛있는 순대", "에그 포테이토 샐러드",
  "당근 케익", "티라미수 케익", "치즈돈까스", "홍대 초마 짬뽕", "조선호텔 포기 김치",
].map((name, index) => ({
  id: `best-${index + 1}`,
  name,
  meta: index < 4 ? "600g · 2인분" : "500g · 1–2인분",
  price: `${[10980, 7980, 11980, 6980, 6480, 7980, 6480, 9980, 8980, 12980][index].toLocaleString("ko-KR")}원`,
  category: index === 5 || index === 6 ? "CAFE" : index === 9 ? "CUPBOARD" : "DINING",
  image: asset(`best/pd${index + 1}.webp`),
}));

const productNames = [
  "신당동식 떡볶이", "에그포테이토 샐러드", "모짜렐라 바질 피자", "야채 볶음밥", "매운 짬뽕",
  "깻잎무침", "계피 호떡", "마르게리따 피자", "속이 꽉 찬 명란젓", "등심 돈까스",
  "티라미수 케익", "유기농 부침 두부", "고구마 핫도그", "조선호텔 김치", "소고기 뭇국",
  "초마 짜장", "깊은 갈비탕", "낙지 볶음밥", "고운 호박죽", "하얀 짬뽕",
];

export const allProducts = productNames.map((name, index) => {
  const imageNumber = index < 15 ? index + 6 : index + 5;
  const category = [1, 6, 10].includes(index) ? "CAFE" : [5, 8, 11, 13].includes(index) ? "CUPBOARD" : "DINING";
  return {
    id: `product-${index + 1}`,
    name,
    meta: "500g · 10분",
    price: `${[5980, 6480, 9980, 5980, 8980, 4480, 5980, 9980, 7480, 10980, 6480, 3980, 6980, 12980, 7980, 6480, 10980, 6980, 4980, 8980][index].toLocaleString("ko-KR")}원`,
    category,
    image: index < 15 ? asset(`products/p${imageNumber}.webp`) : asset(`products/pd_${index - 14}.webp`),
  };
});

export const brandImages = {
  hero: asset("brand/visual.webp"),
  history: asset("brand/c02.webp"),
  chef: asset("brand/c03.webp"),
  labA: asset("brand/c04_img.webp"),
  labB: asset("brand/c04_img2.webp"),
};

export const gourmetImages = {
  hero: asset("gourmet/visual.webp"),
  one: asset("gourmet/choma_img01.webp"),
  two: asset("gourmet/choma_img02.webp"),
  three: asset("gourmet/choma_img03.webp"),
  four: asset("gourmet/choma_img04.webp"),
  five: asset("gourmet/choma_img05.webp"),
};

export const generatedAssets = {
  hero: asset("generated/hero-noodles.webp"),
  recipe: asset("generated/recipe-noodles.webp"),
  principles: asset("generated/brand-principles.webp"),
  wordmark: asset("shared/peacock-wordmark.webp"),
};
