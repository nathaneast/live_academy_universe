import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  // TODO: fetch
  // 목록 데이터 렌더링

  return (
    <div>
      <section>
        <Link href="/workbook?type=create">
          <Button>워크북 생성</Button>
        </Link>
      </section>

      {/* TODO: 임시로 목록 렌더링함. 추후 컴포넌트 분리필요 */}
      {/* TODO: 썸네일, 제목만 렌더링 하도록 변경 */}
      {/* 이미 있는 영상인 경우엔 막아놓기 */}
      <main className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-2 pt-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index}>
            <Image
              src={`https://picsum.photos/300/300?random=${index}`}
              alt={`Random Image ${index}`}
              width={300}
              height={300}
              className="w-full p-2"
            />
            <CardHeader>
              <CardTitle>Card Title {index}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content...</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Link href="/workbook?type=update&id=1">Lead</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </main>
    </div>
  );
}
