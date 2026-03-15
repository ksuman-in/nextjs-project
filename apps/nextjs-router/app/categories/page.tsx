import React from "react";
import Link from "next/link";

export default function Categories() {
  const generateRandomNumbers = React.useMemo(() => {
    return Array.from({ length: 10 }).map(
      // eslint-disable-next-line react-hooks/purity
      () => Math.floor(Math.random() * 1000) + 1,
    );
  }, []);
  return (
    <div>
      <h1>Categories page</h1>
      <ul>
        {generateRandomNumbers
          .sort((a, b) => a - b)
          .map((num) => (
            <li key={num}>
              <Link href={`/categories/${num}`}>Category {num}</Link>
            </li>
          ))}
        <li>
          <Link href={`/categories/no-category`}>Category no-category</Link>
        </li>
      </ul>
    </div>
  );
}
