import { useState } from "react";
import Slider from "./Slider";

export function InteractivePrice() {
  const [price, setPrice] = useState();

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div>100k PAGEVIEWS</div>
        <Slider></Slider>
        <div>$12.00 /month</div>
        <div>
          <div>Monthly billing</div>
          <div>Yearly billing</div>
        </div>
        <div>Unlimited websites</div>
        <div>100% data ownership</div>
        <div>Email reports</div>
        <button>Start my trial</button>
      </div>
    </main>
  );
}
