import { IMG } from "./data";

export default function ComingSoon() {
  return (
    <main className="ht ht-soon">
      <img className="ht-soon-logo" src={`${IMG}/logo.jpg`} alt="Htronic Portões Eletrônicos" width={552} height={138} fetchPriority="high" />
      <h1>Em <em>breve</em></h1>
    </main>
  );
}
