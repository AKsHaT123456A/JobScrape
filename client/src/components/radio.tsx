import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState, useEffect } from "react";

export function RadioGroupDemo() {
  const [clicked, setClicked] = useState("skilled");

  const handleRadioChange = (value:any) => {
    setClicked(value);
  };

  useEffect(() => {
    console.log(clicked);
  }, [clicked]); 

  return (
    <RadioGroup defaultValue="comfortable" className="flex">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="skilled"
          id="r1"
          onClick={() => handleRadioChange("skilled")}
        />
        <Label htmlFor="r1">Seeker</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="contractor"
          id="r2"
          onChange={() => handleRadioChange("contractor")}
        />
        <Label htmlFor="r2">Contractor</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="company"
          id="r3"
          onChange={() => handleRadioChange("Company")}
        />
        <Label htmlFor="r3">Company</Label>
      </div>
    </RadioGroup>
  );
}

export default RadioGroupDemo;
