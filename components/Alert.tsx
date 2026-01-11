import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckBigIcon,OctagonAlertIcon } from "lucide-react";

type AlertSuccessProps = {
  title?: string;
  description?: string;
};

export default function AlertSuccess({
  title = "Operation Successful",
  description = "Your action has been completed successfully",
}: AlertSuccessProps) {
  return (
    <Alert className="border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600">
      <CircleCheckBigIcon className="size-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="text-emerald-600">
        {description}
      </AlertDescription>
    </Alert>
  );
}




type DestructiveAlertProps = {
  title?: string;
  description?: string;
};

export function DestructiveAlert({
  title = "Something Went Wrong",
  description = "An error occurred while processing your request.",
}: DestructiveAlertProps) {
  return (
    <Alert variant="destructive">
      <OctagonAlertIcon className="size-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}