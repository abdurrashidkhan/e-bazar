import LoginWithFb from "../Facebbok/LoginWithFb";
import LoginWithGoogle from "../Google/LoginWithGoogle";

export default function LoginWithAll() {
  return (
    <div className="">
      <div className="">
        <h2 className="text-center overflow-hidden right-line left-line">or</h2>
      </div>
      <div className="flex gap-5 items-center justify-center py-5">
        <LoginWithGoogle />
        ||
        <LoginWithFb />
      </div>
    </div>
  );
}
