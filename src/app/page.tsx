"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState(0);
  const setInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(event.target.value);
    setValue(inputValue);
  };
  return (
    <div>
      <div className="flex flex-col gap-y-4">
        <div>
          <Button variant={"elevated"}>I am button </Button>
        </div>
        <div>
          <Input placeholder="I am an Input" onInput={setInput}></Input>
        </div>
        <div>
          <Progress value={value}></Progress>
        </div>
        <div>
          <Textarea placeholder="I am text area"></Textarea>
        </div>
      </div>
    </div>
  );
}
