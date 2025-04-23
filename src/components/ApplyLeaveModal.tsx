
import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ApplyLeaveModal = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [reason, setReason] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ type, from, to, reason });
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#9b87f5] hover:bg-[#7e69ab] text-white font-semibold px-6">Apply Leave</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Apply for Leave</DialogTitle>
          <DialogDescription>
            Fill out this form to submit a leave request.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-3 mt-2" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="type">Type</Label>
            <Input id="type" value={type} onChange={e => setType(e.target.value)} placeholder="e.g. Sick Leave" required />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="from">From</Label>
              <Input id="from" type="date" value={from} onChange={e => setFrom(e.target.value)} required />
            </div>
            <div className="flex-1">
              <Label htmlFor="to">To</Label>
              <Input id="to" type="date" value={to} onChange={e => setTo(e.target.value)} required />
            </div>
          </div>
          <div>
            <Label htmlFor="reason">Reason</Label>
            <Input id="reason" value={reason} onChange={e => setReason(e.target.value)} placeholder="Quick description..." required />
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-[#9b87f5] hover:bg-[#7e69ab] text-white font-semibold">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyLeaveModal;
