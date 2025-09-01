import TeamSection from "@/components/TeamSection";
import TeamSectionMobile from "@/components/TeamSectionMobile";
import React from "react";

const page = () => {
  return (
    <>
      {/* Desktop version - hidden on mobile */}
      <div className="hidden lg:block">
        <TeamSection />
      </div>

      {/* Mobile version - hidden on desktop */}
      <div className="block lg:hidden">
        <TeamSectionMobile />
      </div>
    </>
  );
};

export default page;
