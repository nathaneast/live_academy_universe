import Link from "next/link";

export default function Home() {
  // TODO: fetch
  // 목록 데이터 렌더링

  return (
    <div>
      HOME
      <div>
        <Link href="/workbook?type=create">
          <button>워크북 생성</button>
        </Link>
      </div>
      <div>Category</div>
      <div>
        List
        <ul>
          <Link href="/workbook?type=update&id=1">
            <li>mock item 1번</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
