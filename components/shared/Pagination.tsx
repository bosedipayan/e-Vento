"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type PaginationProps = {
  urlParamName?: string;
  page: number | string;
  totalPages: number;
};

const Pagination = ({ urlParamName, page, totalPages }: PaginationProps) => {
  const router = useRouter;
  const searchParams = useSearchParams;
  return <div>Pagination</div>;
};

export default Pagination;
