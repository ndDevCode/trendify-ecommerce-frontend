import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioList({
  defaultValue,
  items,
  className,
}: {
  defaultValue: string;
  items: string[];
  className?: string;
}) {
  return (
    <RadioGroup defaultValue={defaultValue} className={className}>
      {items.map((item, i) => (
        <div key={i} className="flex flex-col items-center space-x-2">
          <RadioGroupItem value={item} id={i.toString()} />
          <Label htmlFor={i.toString()} className="self-center mt-2 !mx-0">
            {item}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
