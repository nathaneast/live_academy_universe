import Link from "next/link";

export default function Home() {
  // TODO: fetch
  // 목록 데이터 렌더링

  return (
    <div>
      <section className="pt-6">
        <Link href="/workbook?type=create">
          <button>워크북 생성</button>
        </Link>
      </section>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-6">
        <div>
          <Link href="/workbook?type=update&id=1">mock item 1번</Link>
        </div>
        <div>
          <Link href="/workbook?type=update&id=1">mock item 1번</Link>
        </div>
        <div>
          <Link href="/workbook?type=update&id=1">mock item 1번</Link>
        </div>
        <div>
          <Link href="/workbook?type=update&id=1">mock item 1번</Link>
        </div>
        <div>
          <Link href="/workbook?type=update&id=1">mock item 1번</Link>
        </div>
      </main>
    </div>
  );
}
