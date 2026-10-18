import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CatalogView } from "./components/CatalogView";
import { RecipeModal } from "./components/RecipeModal";
import { TemperingCurvasView } from "./components/TemperingCurvasView";
import { MoldsView } from "./components/MoldsView";
import { FillingsView } from "./components/FillingsView";
import { RecipeDetailView } from "./components/RecipeDetailView";
import { SearchCommandModal } from "./components/SearchCommandModal";
import { LimaGuideModal } from "./components/LimaGuideModal";
import { Recipe, RECIPES_DATA } from "./data/recipes";

export default function App() {
  const [currentTab, setCurrentTab] = useState<
    "catalog" | "recipe-detail" | "curves" | "molds" | "fillings"
  >("catalog");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [activeRecipeId, setActiveRecipeId] = useState<number>(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLimaGuideOpen, setIsLimaGuideOpen] = useState(false);

  // Global ⌘K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleOpenFullRecipe = (recipeId: number) => {
    setActiveRecipeId(recipeId);
    setSelectedRecipe(null);
    setCurrentTab("recipe-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenDosimetry = () => {
    setCurrentTab("curves");
    setTimeout(() => {
      const el = document.getElementById("dosimetry-calculator");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 400, behavior: "smooth" });
      }
    }, 100);
  };

  const handleBackToCatalog = () => {
    setCurrentTab("catalog");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f6] text-[#1b1c1a]">
      {/* Fixed Global Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDosimetry={handleOpenDosimetry}
        onOpenLimaGuide={() => setIsLimaGuideOpen(true)}
        selectedRecipeId={activeRecipeId}
      />

      {/* Main Content View Container */}
      <main className="flex-1 pt-32 sm:pt-36 xl:pt-28">
        {currentTab === "catalog" && (
          <CatalogView
            onSelectRecipe={handleSelectRecipe}
            onOpenFullRecipe={handleOpenFullRecipe}
            onOpenLimaGuide={() => setIsLimaGuideOpen(true)}
          />
        )}

        {currentTab === "curves" && <TemperingCurvasView />}

        {currentTab === "molds" && (
          <MoldsView
            onSelectRecipeById={handleOpenFullRecipe}
            onOpenDosimetryForMold={() => handleOpenDosimetry()}
          />
        )}

        {currentTab === "fillings" && (
          <FillingsView
            onSelectRecipe={handleSelectRecipe}
            onOpenFullRecipe={handleOpenFullRecipe}
          />
        )}

        {currentTab === "recipe-detail" && (
          <RecipeDetailView
            recipeId={activeRecipeId}
            onBackToCatalog={handleBackToCatalog}
            onSelectRecipeById={(id) => {
              setActiveRecipeId(id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onOpenLimaGuide={() => setIsLimaGuideOpen(true)}
          />
        )}
      </main>

      {/* Quick Modal Preview */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
        onOpenFullRecipe={handleOpenFullRecipe}
        onOpenLimaGuide={() => setIsLimaGuideOpen(true)}
      />

      {/* Command Palette Search Modal */}
      <SearchCommandModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectRecipe={(rec) => {
          setSelectedRecipe(rec);
        }}
        onNavigateTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Guía Oficial de Insumos y Proveedores en Lima, Perú */}
      <LimaGuideModal
        isOpen={isLimaGuideOpen}
        onClose={() => setIsLimaGuideOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
