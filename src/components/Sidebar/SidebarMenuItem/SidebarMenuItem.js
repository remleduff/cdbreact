import React, { forwardRef, useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { InnerMenuItem, InnerMenuLi } from "./SidebarMenuItem.style";
import { SidebarContext } from "../Sidebar";
import CDBIcon from "../../Icon";
import { ThemeProvider } from "styled-components";
import { theme } from "./../../../theme";

const SidebarMenuItem = forwardRef(
  (
    {
      children,
      className,
      icon,
      iconSize,
      iconType,
      iconClassName,
      textFontSize,
      active,
      suffix,
      firstchild,
      popperarrow,
      ...rest
    },
    ref
  ) => {
    const menuItemRef = ref ? ref : React.createRef();
    const { toggled } = useContext(SidebarContext);

    return (
      <ThemeProvider theme={theme}>
        <InnerMenuLi
          {...rest}
          ref={menuItemRef}
          className={classNames(className, { active }, { toggled })}
        >
          <InnerMenuItem
            className={classNames({ active }, { toggled })}
            tabIndex={0}
            fontSize={textFontSize}
            role="button"
            toggled={toggled}
          >
            {icon && (
              <CDBIcon
                icon={icon}
                size={iconSize}
                className={classNames(
                  iconClassName,
                  "side-icon",
                  iconType && `fa-${iconType}`
                )}
              />
            )}
            <span className="item-content">{children}</span>
            {suffix ? <span className="suffix-wrapper">{suffix}</span> : null}
          </InnerMenuItem>
        </InnerMenuLi>
      </ThemeProvider>
    );
  }
);

SidebarMenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.string,
  iconClassName: PropTypes.string,
  iconType: PropTypes.string,
  active: PropTypes.bool,
  suffix: PropTypes.node,
  firstchild: PropTypes.number,
  popperarrow: PropTypes.number,
  textFontSize: PropTypes.string,
};

SidebarMenuItem.defaultProps = {
  iconSize: "md",
};

export default SidebarMenuItem;

export { SidebarMenuItem as CDBSidebarMenuItem };
