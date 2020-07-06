import React from 'react';
import './App.css';
import './tailwind.generated.css';
import PortfolioCard from "./PortfolioCard";
import Header from "./Header";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <div className={"grid grid-cols-3 gap-4 mb-4 container mx-auto px-4 my-8"}>
        <PortfolioCard image={"https://picsum.photos/seed/picsum/400/150"} title={"Example Item"} summary={"Lorem ipsum dolor sit amet, praesent eu dolor, molestie id, dictum mi sollicitudin magna sed ac turpis. Ac mi. Feugiat elit non eros felis at. Nunc at felis maecenas est lorem, aptent tincidunt ."} />
        <PortfolioCard image={"https://picsum.photos/seed/picsum/400/150"} title={"Example Item"} summary={"Lorem ipsum dolor sit amet, praesent eu dolor, molestie id, dictum mi sollicitudin magna sed ac turpis. Ac mi. Feugiat elit non eros felis at. Nunc at felis maecenas est lorem, aptent tincidunt ."} />
        <PortfolioCard image={"https://picsum.photos/seed/picsum/400/150"} title={"Example Item"} summary={"Lorem ipsum dolor sit amet, praesent eu dolor, molestie id, dictum mi sollicitudin magna sed ac turpis. Ac mi. Feugiat elit non eros felis at. Nunc at felis maecenas est lorem, aptent tincidunt ."} />
        <PortfolioCard image={"https://picsum.photos/seed/picsum/400/150"} title={"Example Item"} summary={"Lorem ipsum dolor sit amet, praesent eu dolor, molestie id, dictum mi sollicitudin magna sed ac turpis. Ac mi. Feugiat elit non eros felis at. Nunc at felis maecenas est lorem, aptent tincidunt ."} />
        <PortfolioCard image={"https://picsum.photos/seed/picsum/400/150"} title={"Example Item"} summary={"Lorem ipsum dolor sit amet, praesent eu dolor, molestie id, dictum mi sollicitudin magna sed ac turpis. Ac mi. Feugiat elit non eros felis at. Nunc at felis maecenas est lorem, aptent tincidunt ."} />
        <PortfolioCard image={"https://picsum.photos/seed/picsum/400/150"} title={"Example Item"} summary={"Lorem ipsum dolor sit amet, praesent eu dolor, molestie id, dictum mi sollicitudin magna sed ac turpis. Ac mi. Feugiat elit non eros felis at. Nunc at felis maecenas est lorem, aptent tincidunt ."} />
      </div>
    </div>
  );
}

export default App;
