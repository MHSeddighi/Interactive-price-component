import { useCallback, useMemo, useState } from "react";
import Slider from "../components/Slider";
import Chip from "../components/Chip";
import Typography from "../components/Typography";
import Button, { ButtonType } from "../components/Button";
import SVGIcon from "../components/SVGIcon";
import ToggleSwitch from "../components/ToggleSwitch";

export function InteractivePrice() {
  const [pageView, setPageView] = useState<number>(100);
  const [isMonthly, setIsMonthly] = useState(false);

  const handleChangeSlider = (newValue: string) => {
    setPageView(+newValue);
  };

  const handleSwitchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsMonthly(e.target.checked);
    },
    []
  );

  const price = useMemo(() => {
    return {
      price: isMonthly
        ? Math.floor((pageView * 12) / 100).toFixed(2)
        : Math.floor(pageView * 12).toFixed(2),
      duration: isMonthly ? "/month" : "/year",
    };
  }, [pageView, isMonthly]);

  return (
    <main className="flex flex-col gap-8 items-center justify-center py-8">
      <div className="w-full flex flex-col items-center gap-12 min-h-0 p-8 px-4 sm:p-2">
        <Typography type="subtitle">{pageView} PAGEVIEWS</Typography>
        <Slider
          onChange={handleChangeSlider}
          min={0}
          max={200}
          defaultValue={100}
        />
        <div className="flex gap-2 items-baseline">
          <Typography type="title">${price.price}</Typography>
          <Typography>{price.duration}</Typography>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <ToggleSwitch
            label="Monthly billing"
            onChange={handleSwitchChange}
            defaultChecked={isMonthly}
          />
          <Chip
            label="Yearly billing"
            className="bg-orange-200 text-sm text-orange-700"
            text="-25%"
          />
        </div>
      </div>
      <hr className="h-1 w-full text-gray-200" />

      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex gap-2 items-center">
          <SVGIcon
            icon="check-rounded"
            width="24px"
            height="24px"
            className="text-primary"
          />
          <Typography type="bodySmall">Unlimited websites</Typography>
        </div>
        <div className="flex gap-2 items-center">
          <SVGIcon
            icon="check-rounded"
            width="24px"
            height="24px"
            className="text-primary"
          />
          <Typography type="bodySmall">100% data ownership</Typography>
        </div>
        <div className="flex gap-2 items-center">
          <SVGIcon
            icon="check-rounded"
            width="24px"
            height="24px"
            className="text-primary"
          />
          <Typography type="bodySmall">Email reports</Typography>
        </div>
      </div>
      <Button
        type={ButtonType.Contained}
        className="bg-secondary text-on-secondary w-50 cursor-pointer"
      >
        Start my trial
      </Button>
    </main>
  );
}
