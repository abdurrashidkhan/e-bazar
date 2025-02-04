import Link from "next/link";
import { useRouter } from "next/router";

function CustomLink({ children, href, ...props }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <div id="active">
      <Link href={href} {...props}>
        <span style={{ color: isActive ? "#F8426A" : "#475569" }}>
          {children}
        </span>
      </Link>
    </div>
  );
}

export default CustomLink;
