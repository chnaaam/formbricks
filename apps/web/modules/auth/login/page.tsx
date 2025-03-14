import { FormWrapper } from "@/modules/auth/components/form-wrapper";
import { getIsMultiOrgEnabled, getIsSSOEnabled } from "@/modules/ee/license-check/lib/utils";
import { Metadata } from "next";
import {
  AZURE_OAUTH_ENABLED,
  EMAIL_AUTH_ENABLED,
  GITHUB_OAUTH_ENABLED,
  GOOGLE_OAUTH_ENABLED,
  OIDC_DISPLAY_NAME,
  OIDC_OAUTH_ENABLED,
  PASSWORD_RESET_DISABLED,
  SIGNUP_ENABLED,
} from "@formbricks/lib/constants";
import { LoginForm } from "./components/login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Open-source Experience Management. Free & open source.",
};

export const LoginPage = async () => {
  const [isMultiOrgEnabled, isSSOEnabled] = await Promise.all([getIsMultiOrgEnabled(), getIsSSOEnabled()]);
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-tr from-slate-100 to-slate-50">
      <FormWrapper>
        <LoginForm
          emailAuthEnabled={EMAIL_AUTH_ENABLED}
          publicSignUpEnabled={SIGNUP_ENABLED}
          passwordResetEnabled={!PASSWORD_RESET_DISABLED}
          googleOAuthEnabled={GOOGLE_OAUTH_ENABLED}
          githubOAuthEnabled={GITHUB_OAUTH_ENABLED}
          azureOAuthEnabled={AZURE_OAUTH_ENABLED}
          oidcOAuthEnabled={OIDC_OAUTH_ENABLED}
          oidcDisplayName={OIDC_DISPLAY_NAME}
          isMultiOrgEnabled={isMultiOrgEnabled}
          isSSOEnabled={isSSOEnabled}
        />
      </FormWrapper>
    </div>
  );
};
