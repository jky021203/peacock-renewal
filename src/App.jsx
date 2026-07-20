import { useEffect, useMemo, useState } from "react";
import { Footer, Header, Toast } from "./components.jsx";
import { BestPage, BrandPage, GourmetPage, HomePage, ProductsPage } from "./pages.jsx";

const readRoute = () => {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [path = "", query = ""] = raw.split("?");
  return { path, params: new URLSearchParams(query) };
};

export function App() {
  const [route, setRoute] = useState(readRoute);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!window.location.hash) window.history.replaceState(null, "", "#/");
    const handleRoute = () => setRoute(readRoute());
    window.addEventListener("hashchange", handleRoute);
    return () => window.removeEventListener("hashchange", handleRoute);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const pageName = {
      brand: "브랜드 스토리",
      best: "베스트",
      products: "제품",
      gourmet: "고메",
    }[route.path] ?? "홈";
    document.title = `${pageName} | PEACOCK`;
  }, [route.path]);

  const onAdd = (product) => {
    setToast(`${product.name}을(를) 관심 제품에 담았습니다.`);
    window.setTimeout(() => setToast(""), 2500);
  };

  const page = useMemo(() => {
    if (route.path === "brand") return <BrandPage />;
    if (route.path === "best") return <BestPage onAdd={onAdd} />;
    if (route.path === "products") return <ProductsPage onAdd={onAdd} initialCategory={route.params.get("category") ?? "ALL"} initialSearch={route.params.get("search") ?? ""} />;
    if (route.path === "gourmet") return <GourmetPage />;
    return <HomePage onAdd={onAdd} />;
  }, [route.path, route.params]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">본문으로 바로가기</a>
      <Header current={route.path} />
      <main id="main-content">{page}</main>
      <Footer />
      <Toast message={toast} />
    </div>
  );
}
