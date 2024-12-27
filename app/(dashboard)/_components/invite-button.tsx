import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";

const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <VisuallyHidden>
          <DialogTitle>Invite Members</DialogTitle>
        </VisuallyHidden>
        <OrganizationProfile routing="hash" />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
