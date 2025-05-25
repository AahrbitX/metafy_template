import { GradientBackground } from "@/components/gradient-bg";
import Image from "next/image";

export default function IllustrationSection() {
  return (
    <div className="min-h-content w-full max-h-screen rounded-3xl from-primary to-tertiary py-8 my-14">
      <div className="container flex items-center justify-center lg:px-18">
        <div className="h-[250px] md:h-[500px] lg:h-[540px] xl:h-[720px] w-full bg-white rounded-3xl relative">
          <Image
            src="/shadcn-admin.png"
            alt="Shadcn Admin"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
