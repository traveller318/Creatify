import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CreateOrganization } from "@clerk/nextjs";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Image src="/elements.svg" width={200} height={200} alt="Empty" />
      <h2 className="font-semibold text-2xl mt-6">Welcome to Creatify</h2>

      <p className="text-sm mt-2 text-muted-foreground">
        Create your organization to get started
      </p>
      <div className="mt-6">
      <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" >
            Create Organization
        </Button>
      </DialogTrigger>
      <DialogContent className="p-4 bg-transparent border-none max-w-[480px] ">
        <VisuallyHidden>
          <DialogTitle>Create Organization</DialogTitle>
        </VisuallyHidden>
        <div className="relative " style={{ top: '-8px', right: '-23px', }}>
          <CreateOrganization />
        </div>
      </DialogContent>
    </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
