import ConditionalRender from "../oms-syntax-high-light/oms-syntax-high-light";
import OmsSyntaxHighlight from "../oms-syntax-high-light/oms-syntax-high-light";
import {CodeDisplay} from 'ayongUI';
import React, {useEffect, useState} from "react";
import style from "../code-display/index.module.less";

interface Props {
    textContent: string; // 代码内容
    list: number[];// 展开的列表
    keyIndex: number;// 当前展开的列表
}

const codeDisplayCom: React.FC<Props> = ({

                                             textContent = '',
                                             list = [],
                                             keyIndex = 0
                                         }) => {

    const [expandedItems, setExpandedItems] = useState<number[]>(list);
    useEffect(() => {
        setExpandedItems(list)
    }, [list])

    const handleItemClick = (itemId: number) => {
        if (expandedItems?.includes(itemId)) {
            // 如果项目已经展开，关闭它
            setExpandedItems(expandedItems.filter(id => id !== itemId));
        } else {
            // 如果项目未展开，展开它
            setExpandedItems([...expandedItems, itemId]);
        }
    };


    return (
        <>
            <ConditionalRender show={expandedItems.includes(keyIndex)}>
                <OmsSyntaxHighlight textContent={textContent}/>
            </ConditionalRender>
            <div className={style.unfold}>
                <CodeDisplay onClick={() => handleItemClick(keyIndex)}/>
            </div>
        </>

    )
}
export default codeDisplayCom;
