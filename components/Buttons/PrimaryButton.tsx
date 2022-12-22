import Link from "next/link";
import React, { ReactNode } from "react";
import { Stack } from "react-bootstrap";

type PrimaryButtonProps = {
  children: ReactNode;
  toPage: string;
  icon?: ReactNode;
};
const PrimaryButton = ({ children, toPage, icon }: PrimaryButtonProps) => {
  return (
    <Link href={toPage} className="btn btn-dark">
      <Stack direction="horizontal" gap={2}>
        {icon}
        <span className="text-info fw-bold">{children}</span>
      </Stack>
    </Link>
  );
};

export default PrimaryButton;
