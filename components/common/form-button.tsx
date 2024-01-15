"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
  color: string;
  variant?: string;
}

export default function FormButton({
  children,
  color,
  variant,
}: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending} color={color} variant={variant}>
      {children}
    </Button>
  );
}
