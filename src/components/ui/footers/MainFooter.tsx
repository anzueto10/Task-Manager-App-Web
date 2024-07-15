import Link from "next/link";

const MainFooter = () => {
  return (
    <footer className="flex flex-col bg-muted-light dark:bg-muted-dark text-mutedForeground-light dark:text-mutedForeground-dark gap-2 sm:flex-row py-6 md:py-8 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tasker. All rights reserved.
        </p>
        <nav className="flex gap-4 md:gap-6">
          <Link
            href="/terms"
            className="text-sm hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="text-sm hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default MainFooter;
