# Iocn

### 线框风格

```tsx  hideCode=true inline=true
import React from 'react';
import {
    Alipay, Alert, PreviousStep, FileCopy, CodeDisplay, LabelersLists, UserHollow,
    EyesOpen, EyesClosed, Setting, Collapse, Unfold, Alipayfull, Advance, Wechatfull,
    Fileput, Download, Uploads, Wechat, Weibofull, Weibo, Fulcopy, Taobao, Taobaoful, Android,
    Androidfu, Google, Googlefu, Plusround, Plusrofu, Minusround, Minusrfu, Upward, Upwardfu,
    Downward, Downwardfu, Downwleft, Downwleftfu, Downwright, Downwrightfu, Arrotopfu,
    Arrowbuttomfu, Arroleft, Arroright, Shrinks, Dilate, Rewind, Forward, Doubleright,
    Doubleleft, Aligntop, Alignbottom, Aligncenter, Enter, Rollback, Retweet, Swap,
    Swapleft, Swapright, Tick, Wrong, Lament, Illustrate, Delete, Search, Transfer,
    Unlock, Save, Message, Play, Panetop, Panedown, Paneleft, Paneright, Login, Logout,
    Menufold, Menuunfold, Borderbottom, Borderhorizontal, Borderlnner, Bordersolid,
    Borderleft, Borderight, Bordertop, Borderverticle, Wrongs, Under, Nocontent, Picture,
    Pictureletf, Pictureright, Images, Ieftbottom, Rightbottom, Upleft, Upright, Fullscren,
    Exitfullscren, Gitlab, Right, Rightcircle, Folder, Openfolder,Send,Useradd,Deleteuser,
    Addusers,Userdelete,Paper,Support,Loading,Lock,Letter,Messages,Poweroff,Printer,Flushed,
    Rest,Sweep,Soundoff,Sound,Close,Laments,Rounlament,Question,Quesround,Disc,Disike,Expand,
    Ellipsis,Exprot,Fileimg,Userswich,Cendas,Imgjpg,Zip,Updatetime,Reply,Stars,Exits,Codes,
    Codeblock,Bookmarks,Sunny,Moon,Laughing,Posits,Skin,Handoff,
} from "ayongUI";
import Tab from "./components/tab.tsx";
import {copyText} from "./utils/index.ts";
import "./index.less";
export default () => {
    const iconCmps = [
        {
            cmp: Alipay,
            name: "Alipay",
        },
        {
            cmp: Alert,
            name: "Alert",
        },
        {
            cmp: PreviousStep,
            name: "PreviousStep",
        },
        {
            cmp: Advance,
            name: "Advance",
        },
        {
            cmp: FileCopy,
            name: "FileCopy",
        },
        {
            cmp: CodeDisplay,
            name: "CodeDisplay",
        },
        {
            cmp: LabelersLists,
            name: "LabelersLists",
        },
        {
            cmp: Collapse,
            name: "Collapse",
        },
        {
            cmp: Unfold,
            name: "Unfold",
        },
        {
            cmp: UserHollow,
            name: "UserHollow",
        },
        {
            cmp: EyesOpen,
            name: "EyesOpen",
        },
        {
            cmp: EyesClosed,
            name: "EyesClosed",
        },
        {
            cmp: Setting,
            name: "Setting",
        },
        {
            cmp: Fileput,
            name: "Fileput",
        },
        {
            cmp: Download,
            name: "Download",
        },
        {
            cmp: Uploads,
            name: "Upload",
        },
        {
            cmp: Wechat,
            name: "Wechat",
        },
        {
            cmp: Weibo,
            name: "Weibo",
        },
        {
            cmp: Taobao,
            name: "Taobao",
        },
        {
            cmp: Android,
            name: "Android",
        },
        {
            cmp: Google,
            name: "Google",
        },
        {
            cmp: Plusround,
            name: "Plusround",
        },
        {
            cmp: Minusround,
            name: "Minusround",
        },
        {
            cmp: Upward,
            name: "Upward",
        },
        {
            cmp: Downward,
            name: "Downward",
        },
        {
            cmp: Downwleft,
            name: "Downwleft",
        },
        {
            cmp: Downwright,
            name: "Downwright",
        },
        {
            cmp: Shrinks,
            name: "Shrinks",
        },
        {
            cmp: Dilate,
            name: "Dilate",
        },
        {
            cmp: Doubleright,
            name: "Doubleright",
        },
        {
            cmp: Doubleleft,
            name: "Doubleleft",
        },
        {
            cmp: Aligntop,
            name: "Aligntop",
        },
        {
            cmp: Alignbottom,
            name: "Alignbottom",
        },
        {
            cmp: Aligncenter,
            name: "Aligncenter",
        },
        {
            cmp: Enter,
            name: "Enter",
        },
        {
            cmp: Rollback,
            name: "Rollback",
        },
        {
            cmp: Retweet,
            name: "Retweet",
        },
        {
            cmp: Swap,
            name: "Swap",
        },
        {
            cmp: Swapleft,
            name: "Swapleft",
        },
        {
            cmp: Swapright,
            name: "Swapright",
        },
        {
            cmp: Delete,
            name: "Delete",
        },
        {
            cmp: Search,
            name: "Search",
        },
        {
            cmp: Transfer,
            name: "Transfer",
        },
        {
            cmp: Unlock,
            name: "Unlock",
        }, 
        {
            cmp: Lock,
            name: "Lock",
        },
        {
            cmp: Save,
            name: "Save",
        },
        {
            cmp: Play,
            name: "Play",
        },
        {
            cmp: Panetop,
            name: "Panetop",
        },
        {
            cmp: Panedown,
            name: "Panedown",
        },
        {
            cmp: Paneleft,
            name: "Paneleft",
        },
        {
            cmp: Paneright,
            name: "Paneright",
        },
        {
            cmp: Login,
            name: "Login",
        },
        {
            cmp: Logout,
            name: "Logout",
        },
        {
            cmp: Menufold,
            name: "Menufold",
        },
        {
            cmp: Menuunfold,
            name: "Menuunfold",
        },
        {
            cmp: Borderbottom,
            name: "Borderbottom",
        },
        {
            cmp: Bordertop,
            name: "Bordertop",
        },
        {
            cmp: Borderhorizontal,
            name: "Borderhorizontal",
        },
        {
            cmp: Borderverticle,
            name: "Borderverticle",
        },
        {
            cmp: Borderlnner,
            name: "Borderlnner",
        },
        {
            cmp: Bordersolid,
            name: "Bordersolid",
        },
        {
            cmp: Borderleft,
            name: "Borderleft",
        },
        {
            cmp: Borderight,
            name: "Borderight",
        },
        {
            cmp: Wrongs,
            name: "Wrongs",
        },
        {
            cmp: Under,
            name: "Under",
        },
        {
            cmp: Nocontent,
            name: "Nocontent",
        },
        {
            cmp: Picture,
            name: "Picture",
        },
        {
            cmp: Pictureletf,
            name: "Pictureletf",
        },
        {
            cmp: Pictureright,
            name: "Pictureright",
        },
        {
            cmp: Images,
            name: "Images",
        },
        {
            cmp: Ieftbottom,
            name: "Ieftbottom",
        },
        {
            cmp: Rightbottom,
            name: "Rightbottom",
        },
        {
            cmp: Upleft,
            name: "Upleft",
        },
        {
            cmp: Upright,
            name: "Upright",
        },
        {
            cmp: Fullscren,
            name: "Fullscren",
        },
        {
            cmp: Exitfullscren,
            name: "Exitfullscren",
        },
        {
            cmp: Gitlab,
            name: "Gitlab",
        },
        {
            cmp: Right,
            name: "Right",
        },
        {
            cmp: Rightcircle,
            name: "Rightcircle",
        },
        {
            cmp: Folder,
            name: "Folder",
        },
        {
            cmp: Openfolder,
            name: "Openfolder",
        },
        {
            cmp: Send,
            name:"Send",
        },
        {
            cmp: Useradd,
            name:"Useradd",
        },
        {
            cmp: Deleteuser,
            name:"Deleteuser",
        },
        {
            cmp: Addusers,
            name:"Addusers",
        }, 
        {
            cmp: Userdelete,
            name:"Userdelete",
        },
        {
            cmp: Paper,
            name:"Paper",
        },
        {
            cmp: Support,
            name:"Support",
        },
        {
            cmp: Loading,
            name:"Loading",
        },
        {
            cmp: Letter,
            name:"Letter",
        },   
        {
            cmp: Messages,
            name:"Messages",
        },
        {
            cmp: Poweroff,
            name:"Poweroff",
        },  
        {
            cmp: Printer,
            name:"Printer",
        },
        {
            cmp: Flushed,
            name:"Flushed",
        },
        {
            cmp: Rest,
            name:"Rest",
        },  
        {
            cmp: Sweep,
            name:"Sweep",
        },
        {
            cmp: Soundoff,
            name:"Soundoff",
        },
        {
            cmp: Sound,
            name:"Sound",
        },
        {
            cmp: Close,
            name:"Close",
        }, 
        {
            cmp: Laments,
            name:"Laments",
        }, 
        {
            cmp: Rounlament,
            name:"Rounlament",
        },
        {
            cmp: Question,
            name:"Question",
        }, 
        {
            cmp: Quesround,
            name:"Quesround",
        },
        {
            cmp: Disc,
            name:"Disc",
        },
        {
            cmp: Disike,
            name:"Disike",
        }, 
        {
            cmp: Expand,
            name:"Expand",
        },
        {
            cmp: Ellipsis,
            name:"Ellipsis",
        },
        {
            cmp: Exprot,
            name:"Exprot",
        },
        {
            cmp: Fileimg,
            name:"Fileimg",
        }, 
        {
            cmp: Userswich,
            name:"Userswich",
        },
        {
            cmp: Cendas,
            name:"Cendas",
        },
        {
            cmp: Imgjpg,
            name:"Imgjpg",
        },
        {
            cmp: Zip,
            name:"Zip",
        },
        {
            cmp: Updatetime,
            name:"Updatetime",
        },
        {
            cmp: Reply,
            name:"Reply",
        },
        {
            cmp: Stars,
            name:"Stars",
        },
        {
            cmp: Exits,
            name:"Exits",
        },
        {
            cmp: Codes,
            name:"Codes",
        }, 
        {
            cmp: Codeblock,
            name:"Codeblock",
        },
        {
            cmp: Bookmarks,
            name:"Bookmarks",
        }, 
        {
            cmp: Sunny,
            name:"Sunny",
        },
        {
            cmp: Moon,
            name:"Moon",
        },
        {
            cmp: Laughing,
            name:"Laughing",
        }, 
        {
            cmp: Posits,
            name:"Posits",
        },
        {
            cmp: Skin,
            name:"Skin",
        },
        {
            cmp: Handoff,
            name:"Handoff",
        },
    ];
    const iconClick = (name: string) => {
        copyText(`<${name}/>`);
        Message.success({message: "复制成功", duration: 1});
    };
    let tabData = [
        {
            title: "线框风格",
            content: (
                <div className="icons">
                    {iconCmps.map((item, index) => {
                        return (
                            <div className="icon-border" key={index}>
                                <div className="icon-item" onClick={() => iconClick(item.name)}>
                                    {React.createElement(item.cmp,{className:"icon" as string})}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ),
        },
    ];
    return (
        <div>
            <Tab defaultActiveTab={0} tabs={tabData}/>
        </div>
    );
};
```
### 实底风格
```tsx  hideCode=true inline=true
import React from 'react';
import {
    Alipay, Alert, PreviousStep, FileCopy, CodeDisplay, LabelersLists, UserHollow,
    EyesOpen, EyesClosed, Setting, Collapse, Unfold, Alipayfull, Advance, Wechatfull,
    Fileput, Download, Upload, Wechat, Weibofull, Weibo, Fulcopy, Taobao, Taobaoful, Android,
    Androidfu, Google, Googlefu, Plusround, Plusrofu, Minusround, Minusrfu, Upward, Upwardfu,
    Downward, Downwardfu, Downwleft, Downwleftfu, Downwright, Downwrightfu, Arrotopfu,
    Arrowbuttomfu, Arroleft, Arroright, Shrinks, Dilate, Rewind, Forward, Doubleright,
    Doubleleft, Aligntop, Alignbottom, Aligncenter, Enter, Rollback, Retweet, Swap,
    Swapleft, Swapright, Tick, Wrong, Lament, Illustrate, Delete, Search, Transfer,
    Unlock, Save, Message, Play, Panetop, Panedown, Paneleft, Paneright, Login, Logout,
    Menufold, Menuunfold, Borderbottom, Borderhorizontal, Borderlnner, Bordersolid,
    Borderleft, Borderight, Bordertop, Borderverticle, Empty,Github,Image,Posit,
    Settings,Bellfiled,Bulb,Replys,Star,Bookmark,User,Addser,Switchusers,Handsolid,
} from "ayongUI";
import Tab from "./components/tab.tsx";
import {copyText} from "./utils/index.ts";
import "./index.less";

export default () => {
    const solidicon = [
        {
            cmp: Alipayfull,
            name: "Alipayfull",
        },
        {
            cmp: Wechatfull,
            name: "Wechatfull",
        },
        {
            cmp: Weibofull,
            name: "Weibofull",
        },
        {
            cmp: Fulcopy,
            name: "Fulcopy",
        },
        {
            cmp: Taobaoful,
            name: "Taobaoful",
        },
        {
            cmp: Androidfu,
            name: "Androidfu",
        },
        {
            cmp: Googlefu,
            name: "Googlefu",
        },
        {
            cmp: Plusrofu,
            name: "Plusrofu",
        },
        {
            cmp: Minusrfu,
            name: "Minusrfu",
        },
        {
            cmp: Upwardfu,
            name: "Upwardfu",
        },
        {
            cmp: Downwardfu,
            name: "Downwardfu",
        },
        {
            cmp: Downwleftfu,
            name: "Downwleftfu",
        },
        {
            cmp: Downwrightfu,
            name: "Downwrightfu",
        },
        {
            cmp: Arrotopfu,
            name: "Arrotopfu",
        },
        {
            cmp: Arrowbuttomfu,
            name: "Arrowbuttomfu",
        },
        {
            cmp: Arroleft,
            name: "Arroleft",
        },
        {
            cmp: Arroright,
            name: "Arroright",
        },
        {
            cmp: Rewind,
            name: "Rewind",
        },
        {
            cmp: Forward,
            name: "Forward",
        },
        {
            cmp: Tick,
            name: "Tick",
        },
        {
            cmp: Wrong,
            name: "Wrong",
        },
        {
            cmp: Lament,
            name: "Lament",
        },
        {
            cmp: Illustrate,
            name: "Illustrate",
        },
        {
            cmp: Empty,
            name: "Empty",
        },
        {
            cmp: Github,
            name: "Github",
        },
        {
            cmp: Image,
            name:"Image",
        },
        {
            cmp: Posit,
            name:"Posit",
        },
        {
            cmp: Settings,
            name:"Settings",
        },
        {
            cmp: Bellfiled,
            name:"Bellfiled",
        },
        {
            cmp: Bulb,
            name:"Bulb",
        },
        {
            cmp: Replys,
            name:"Replys",
        },
        {
            cmp: Star,
            name:"Star",
        },
        {
            cmp: Bookmark,
            name:"Bookmark",
        },
        {
            cmp: User,
            name:"User",
        },
        {
            cmp: Addser,
            name:"Addser",
        },
        {
            cmp: Switchusers,
            name:"Switchusers",
        },
        {
            cmp: Handsolid,
            name:"Handsolid",
        },
    ]
    const iconClick = (name: string) => {
        copyText(`<${name}/>`);
        Message.success({message: "复制成功", duration: 1});
    };
    let tabData = [
        {
            title: "实底风格",
            content: <div className='solidicon'>
                {solidicon.map((item, index) => {
                    return (
                        <div className="solidicon-border" key={index}>
                            <div className="solidicon-item" onClick={() => iconClick(item.name)}>
                                {React.createElement(item.cmp,{className:"solidicon-icons" as string} )}
                            </div>
                        </div>
                    );
                })}
            </div>,
        }
    ]
    return (
        <div>
            <Tab defaultActiveTab={0} tabs={tabData}/>
        </div>
    )
}
```
