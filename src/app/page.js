import { getMonth } from "./utils";
export default function Home() {
  const calendar = getMonth();
  console.table(calendar);
  return <div>hello</div>;
}
