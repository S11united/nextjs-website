import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import Avatar from "./Avatar";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Grid } from "@react-three/drei";
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr, 1fr]" >

      <Heading as = "h1" size="xl" className="col-start-1">
          {slice.primary.heading}
        </Heading>

      

    <div className="prose prose-2xl prose-slate prose-invert col-start-1  " 

    style={{fontFamily: 'Urbanist, serif'}}

    >
    <PrismicRichText field={slice.primary.description} />
    </div>
    <Button linkField = {slice.primary.button_link} 
          label={slice.primary.button_text}
          
          
          />

          
          <Avatar
           image={slice.primary.avatar} className="row-start-1 max-w-sm md:col-start-2 md:row-end-3 md:max-w-screen-xl">
            
           </Avatar>
           </div>



    </Bounded>
  );
};

export default Biography;
