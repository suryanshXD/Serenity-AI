import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth, signOut } from "../utils/auth";

export async function Profile() {
  const session = await auth();
  if (!session) {
    return;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            className="rounded-lg size-11 cursor-pointer"
            src={session.user?.image!}
            alt="User-Image"
          /> 
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuLabel className="text-gray-700">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-gray-700 text-sm">
            {session.user?.name}
          </DropdownMenuItem>
          <DropdownMenuItem className="text-gray-700 text-sm">
            {session.user?.email}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <DropdownMenuItem>
              <button className="font-semibold text-red-500 cursor-pointer w-full text-start">
                Logout
              </button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
