import React, { Component } from "react";
import TemplateOption from "../../ReusableComponents/TemplateOption";
import ImageComponent from "../../ReusableComponents/ImageComponent";
import TextComponent from "../../ReusableComponents/TextComponent";
import IconComponent from "../../ReusableComponents/IconSelectionComponent";
import LineColorComponent from "../../ReusableComponents/LineColorComponent";

export class WWD_TemplateOne extends Component {
  render() {
    return (
      <div className="template_main_container">
        {!this.props.noEditMode ? (
          <TemplateOption
            backgroundColor={this.props.template_data.backgroundColor}
            displayLogo={this.props.template_data.display_logo}
            onTemplateItemChangeWithoutEvent={
              this.props.onTemplateItemChangeWithoutEvent
            }
            template_index={this.props.template_index}
            {...this.props}
          />
        ) : null}
        <div className="template_display_area">
          <TemplateArea {...this.props} />
        </div>
      </div>
    );
  }
}

export default WWD_TemplateOne;

export const TemplateArea = (props) => {
  const backgroundColor = props.template_data.backgroundColor;
  // console.log( props.template_data );
  return (
    <div
      id="what_we_do_template_three"
      className="what_we_do_template_three template_main_container_display_area"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="what_we_do_template_three__top">
        <LineColorComponent
          noEditMode={props.noEditMode}
          classNameOfLineDiv="what_we_do_template_three__left_top__line"
          classNameString="img_block_line_background"
          backgroundColor={props.template_data.img_block_line_background}
          onTemplateItemChangeWithoutEvent={
            props.onTemplateItemChangeWithoutEvent
          }
          template_index={props.template_index}
          {...props}
        />
        <TextComponent
          data_text={props.template_data.headline}
          noEditMode={props.noEditMode}
          onChange={props.onTemplateEditorChangeHandler(
            "headline",
            props.template_index
          )}
        />
      </div>
      <div className="what_we_do_template_three__bottom">
        <div className="what_we_do_template_three__bottom_left">
          <div className="what_we_do_template_three_block">
            <div className="what_we_do_template_three_block__left">
              <IconComponent
                icon_name={props.template_data.icon_name_one}
                icon_background={props.template_data.icon_background_one}
                icon_size={props.template_data.icon_size_one}
                icon_color={props.template_data.icon_one_color}
                icon_name_id={"icon_name_one"}
                stackClass={`icon_name_one${props.template_index}`}
                icon_background_name={"icon_background_one"}
                icon_size_name={"icon_size_one"}
                icon_modal_name={"icon_one_modal"}
                icon_color_name={"icon_one_color"}
                onTemplateItemChange={props.onTemplateItemChange}
                onTemplateItemChangeWithoutEvent={
                  props.onTemplateItemChangeWithoutEvent
                }
                template_index={props.template_index}
                noEditMode={props.noEditMode}
              />
            </div>
            <div className="what_we_do_template_three_block__right">
              <div className="what_we_do_template_three_block__right_headline">
                <TextComponent
                  data_text={props.template_data.para_one_headline}
                  noEditMode={props.noEditMode}
                  onChange={props.onTemplateEditorChangeHandler(
                    "para_one_headline",
                    props.template_index
                  )}
                />
              </div>
              <div className="what_we_do_template_three_block__right_para">
                <TextComponent
                  data_text={props.template_data.para_one_text}
                  noEditMode={props.noEditMode}
                  onChange={props.onTemplateEditorChangeHandler(
                    "para_one_text",
                    props.template_index
                  )}
                />
              </div>
            </div>
          </div>
          <div className="what_we_do_template_three_block">
            <div className="what_we_do_template_three_block__left">
              <IconComponent
                icon_name={props.template_data.icon_name_two}
                icon_background={props.template_data.icon_background_two}
                icon_size={props.template_data.icon_size_two}
                icon_color={props.template_data.icon_two_color}
                icon_name_id={"icon_name_two"}
                stackClass={`icon_name_two${props.template_index}`}
                icon_background_name={"icon_background_two"}
                icon_size_name={"icon_size_two"}
                icon_modal_name={"icon_two_modal"}
                icon_color_name={"icon_two_color"}
                onTemplateItemChange={props.onTemplateItemChange}
                onTemplateItemChangeWithoutEvent={
                  props.onTemplateItemChangeWithoutEvent
                }
                template_index={props.template_index}
                noEditMode={props.noEditMode}
              />
            </div>
            <div className="what_we_do_template_three_block__right">
              <div className="what_we_do_template_three_block__right_headline">
                <TextComponent
                  data_text={props.template_data.para_two_headline}
                  noEditMode={props.noEditMode}
                  onChange={props.onTemplateEditorChangeHandler(
                    "para_two_headline",
                    props.template_index
                  )}
                />
              </div>
              <div className="what_we_do_template_three_block__right_para">
                <TextComponent
                  data_text={props.template_data.para_two_text}
                  noEditMode={props.noEditMode}
                  onChange={props.onTemplateEditorChangeHandler(
                    "para_two_text",
                    props.template_index
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="what_we_do_template_three__bottom_right">
          <ImageComponent
            image_width={props.template_data.image_one_width}
            image_crop={props.template_data.image_one_crop}
            main_src={props.template_data.image_one_src}
            src={
              !props.template_data.image_one_cropped_src
                ? props.template_data.image_one_src
                : props.template_data.image_one_cropped_src
            }
            name_normal={"image_one_src"}
            stackClass={`image_one_src${props.template_index}`}
            name_cropped={"image_one_cropped_src"}
            crop_name={"image_one_crop"}
            noEditMode={props.noEditMode}
            {...props}
          />
        </div>
      </div>
    </div>
  );
};
