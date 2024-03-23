"use client";

import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";

export default function SearchBar(params: any) {
  const pathname = usePathname();

  const searchParams = useSearchParams()!;
  const router = useRouter();

  // create a query to filter, eg. /events?status=value
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="w-full">
      <Input
        placeholder="Filter by name..."
        onChange={(e) => {
          router.replace(
            `${pathname}?${createQueryString(
              "search",
              e.target.value.toString()
            )}`
          );
        }}
      />
    </div>
  );
}
