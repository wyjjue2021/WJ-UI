import React from 'react'
import t from 'prop-types'

export interface ButtonProps {
    /**
   * 可以这样写属性描述
   * @description       设置按钮类型	
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述
   * @default           支持定义默认值
   */
    type?: 'primary' | 'dashed' | 'text' | 'link'
}



const prefixCls = 'wj-button';

const Button:React.FC<ButtonProps> = ({children, type = 'primary', ...rest }) => {
    return <div className={prefixCls}
        style = {{}}>
        {children}
    </div>
}


Button.propTypes = {
    type: t.oneOf(['primary', 'dashed', 'text', 'link']),
  };

export default Button;
