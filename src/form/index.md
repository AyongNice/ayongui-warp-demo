# Form 表单

```tsx  hideCode=true inline=true
import {usePrefersColor} from 'dumi';
import React, {useEffect} from 'react';
import {setThemeVariables} from "ayongUI";
import {ModeTheme} from '../../globe/theme.ts'

export default () => {
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();
  useEffect(() => {
    setThemeVariables(new ModeTheme()[color])
  }, [color])

};
```

[//]: # (### 基本使用)

[//]: # ()

[//]: # (```tsx)

[//]: # (import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI')

[//]: # (import {useState} from "react";)

[//]: # ()

[//]: # (export default &#40;&#41; => {)

[//]: # ()

[//]: # (    const [formLayout, setFormLayout] = useState&#40;'right'&#41;;)

[//]: # (    const [componentDisabled, setComponentDisabled] = useState&#40;false&#41;;)

[//]: # (    const onValuesChange = &#40;{layout}&#41; => {)

[//]: # (        setFormLayout&#40;layout&#41;)

[//]: # (    };)

[//]: # ()

[//]: # (    const submit = &#40;formData&#41; => {)

[//]: # (        console.log&#40;'submit~~~~', formData&#41;)

[//]: # (    })

[//]: # (    return <div style={{width: '588px'}}>)

[//]: # (        <Radio)

[//]: # (            checked={componentDisabled})

[//]: # (            onChange={&#40;checked&#41; => setComponentDisabled&#40;checked&#41;})

[//]: # (        >)

[//]: # (            Form 禁用)

[//]: # (        </Radio>)

[//]: # (        <Form formLayout={formLayout})

[//]: # (              disabled={componentDisabled})

[//]: # (              onValuesChange={onValuesChange})

[//]: # (              submit={submit})

[//]: # (        >)

[//]: # (            <Form.Item)

[//]: # (                label="布局")

[//]: # (                name="layout")

[//]: # (            >)

[//]: # (                <Radio.Group>)

[//]: # (                    <Radio.Button value="left">靠左对齐</Radio.Button>)

[//]: # (                    <Radio.Button value="center">剧中对齐</Radio.Button>)

[//]: # (                    <Radio.Button value="right">靠右对齐</Radio.Button>)

[//]: # (                    <Radio.Button value="vertical">上下布局</Radio.Button>)

[//]: # (                    <Radio.Button value="inline">左右布局</Radio.Button>)

[//]: # (                </Radio.Group>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="账户")

[//]: # (                name="username")

[//]: # (                rules={[{required: true, message: 'Please input your username!'}, {)

[//]: # (                    maxLength: 2,)

[//]: # (                    message: '超出最大长度显示')

[//]: # (                }]})

[//]: # ()

[//]: # (            >)

[//]: # (                <Input/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="密码")

[//]: # (                name="password")

[//]: # (                rules={[{required: true, message: 'Please input your username!'}]})

[//]: # (            >)

[//]: # (                <Input/>)

[//]: # (            </Form.Item>)

[//]: # ()

[//]: # (            <Form.Item)

[//]: # (                label="附件上传")

[//]: # (                name="file")

[//]: # (                style={{height: '80px'}})

[//]: # (                rules={[{required: true, message: 'Please input your username!'}]})

[//]: # (            >)

[//]: # (                <Upload maxCount={2}/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="是否跨越")

[//]: # (                name="cors")

[//]: # (                rules={[{required: true, message: 'Please input your username!'}]})

[//]: # (            >)

[//]: # (                <Radio/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item wrapperCol={{offset: 8, span: 16}}>)

[//]: # (                <Button type="primary" htmlType="submit">)

[//]: # (                    Submit)

[//]: # (                </Button>)

[//]: # ()

[//]: # (            </Form.Item>)

[//]: # (        </Form>)

[//]: # ()

[//]: # ()

[//]: # (    </div>)

[//]: # ()

[//]: # (})

[//]: # ()

[//]: # (```)

### 表单验证

[//]: # (```tsx)

[//]: # ()

[//]: # (import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI')

[//]: # ()

[//]: # (import {useState} from "react";)

[//]: # ()

[//]: # ()

[//]: # (export default &#40;&#41; => {)

[//]: # ()

[//]: # (    const [form] = Form.useForm&#40;&#41;;)

[//]: # ()

[//]: # ()

[//]: # (    const onFinishFailed = &#40;values: any&#41; => {)

[//]: # ()

[//]: # (        console.log&#40;values&#41;;)

[//]: # ()

[//]: # (    };)

[//]: # ()

[//]: # (    const submit = &#40;formData&#41; => {)

[//]: # ()

[//]: # (        console.log&#40;'submit~~~~', formData&#41;)

[//]: # ()

[//]: # (    })

[//]: # ()

[//]: # ()

[//]: # (    return <Form)

[//]: # ()

[//]: # (        form={form})

[//]: # ()

[//]: # (        initialValues={{username: 'ayong'}})

[//]: # ()

[//]: # (        onFinishFailed={onFinishFailed})

[//]: # ()

[//]: # (        submit={submit})

[//]: # ()

[//]: # (    >)

[//]: # ()

[//]: # (        <Form.Item)

[//]: # ()

[//]: # (            label="普通校验")

[//]: # ()

[//]: # (            name="password")

[//]: # ()

[//]: # (            rules={[{required: true, message: 'Please input your password!'}]})

[//]: # ()

[//]: # (        >)

[//]: # ()

[//]: # (            <Input/>)

[//]: # ()

[//]: # (        </Form.Item>)

[//]: # ()

[//]: # (        <Form.Item)

[//]: # (            label="失焦时候验证")

[//]: # (            name="blur")

[//]: # (            rules={[)

[//]: # ()

[//]: # (                {required: true, message: 'Please input your username!'},)

[//]: # (                {)

[//]: # (                    maxLength: 7,)

[//]: # (                    message: '超出最大长度7',)

[//]: # (                })

[//]: # ()

[//]: # (            ]})

[//]: # ()

[//]: # ()

[//]: # (        >)

[//]: # ()

[//]: # (            <Input/>)

[//]: # ()

[//]: # (        </Form.Item>)

[//]: # ()

[//]: # (        <Form.Item)

[//]: # ()

[//]: # (            label="自定义校验")

[//]: # ()

[//]: # (            name="diy")

[//]: # ()

[//]: # (            rules={[)

[//]: # ()

[//]: # (                {)

[//]: # (                    trigger: 'blur',)

[//]: # (                    validator: &#40;name, value&#41; => {)

[//]: # (                        const regex = /^&#40;https?:\/\/&#41;/i;)

[//]: # ()

[//]: # (                        if &#40;!regex.test&#40;value&#41;&#41; {)

[//]: # (                            return Promise.reject&#40;'请输入正确的http 或者https协议的url'&#41;;)

[//]: # (                        })

[//]: # (                        return Promise.resolve&#40;&#41;;)

[//]: # ()

[//]: # (                    })

[//]: # ()

[//]: # (                },)

[//]: # ()

[//]: # ()

[//]: # (            ]}>)

[//]: # ()

[//]: # (            <Input/>)

[//]: # ()

[//]: # (        </Form.Item>)

[//]: # ()

[//]: # (     )

[//]: # ()

[//]: # (        <Form.Item)

[//]: # ()

[//]: # (            label="是否跨域")

[//]: # ()

[//]: # (            name="cors")

[//]: # ()

[//]: # (            rules={[{required: true, message: 'Please input your cors!'}]})

[//]: # ()

[//]: # (        >)

[//]: # (            <Radio/>)

[//]: # ()

[//]: # (        </Form.Item>)

[//]: # ()

[//]: # (        <Form.Item>)

[//]: # (            <Button type="primary" htmlType="submit">)

[//]: # (                提交)

[//]: # (            </Button>)

[//]: # (        </Form.Item>)

[//]: # ()

[//]: # (    </Form>)

[//]: # ()

[//]: # ()

[//]: # (})

[//]: # ()

[//]: # (```)

### 表单方法调用

**⚠️在使用 动态方法创建 Form.Item 内嵌套自身时候, 最外层Form.Item 必传 isWarp参数, 方法内接收 props参数
必须回传给内部嵌套的Form.Item**

```tsx

import {Button, Form, Input, Select} from 'ayongUI'

import {useState} from "react";


export default () => {

  const [form] = Form.useForm();


  const onFinishFailed = (values: any) => {

    console.log(values);

  };

  const submit = (formData) => {

    console.log('submit~~~~', formData)

  }

  const onReset = () => {

    form.resetFields();

  };

  return <Form

    form={form}

    labelWidth={'150px'}

    onFinishFailed={onFinishFailed}

    submit={submit}

  >

    <Form.Item

      label="账户"

      name="username"

      rules={[

        {required: true, message: 'Please input your username!'},

      ]}


    >

      <Input/>

    </Form.Item>

    <Form.Item

      label="密码"

      name="password"

      rules={[{required: true, message: 'Please input your password!'}]}

    >

      <Input/>

    </Form.Item>


    <Form.Item

      label="身份绑定模式"

      name="mode"

      rules={[{required: true, message: 'Please input your password!'}]}

    >

      <Select

        style={{width: 150}}

        options={[

          {value: 'noto', label: '不绑定'},

          {value: 'Phone', label: '手机号'},

          {value: 'Mailbox', label: '邮箱'},

          {value: 'Google', label: 'Google账号'},

        ]}

      />


    </Form.Item>


    <Form.Item

      isWarp

    >

      {({getFieldValue, props, ref}) => {

        return getFieldValue('mode') === 'Phone' ?


          <Form.Item  {...props} ref={ref} name="phone" label="手机号"

                      rules={[

                        {required: true, message: 'required'},

                        {maxLength: 2, message: 'maxLength'}

                      ]}>

            <Input/>

          </Form.Item> : null

      }}


    </Form.Item>


    <Form.Item wrapperCol={{offset: 8, span: 16}}>

      <Button type="primary" htmlType="submit">

        提交

      </Button>

      <Button onClick={onReset}>

        重置

      </Button>


      <Button

        onClick={() => form.setFieldsValue({

          mode: 'Phone',

        })}>

        填充

      </Button>


    </Form.Item>

  </Form>


}

```

### 表单大小

[//]: # (```tsx)

[//]: # (import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI')

[//]: # (import {useState} from "react";)

[//]: # ()

[//]: # (export default &#40;&#41; => {)

[//]: # ()

[//]: # (    const [size, setSize] = useState&#40;'middle'&#41;;)

[//]: # (    const onValuesChange = &#40;{size}&#41; => {)

[//]: # (        setSize&#40;size&#41;)

[//]: # (    };)

[//]: # ()

[//]: # (    const submit = &#40;formData&#41; => {)

[//]: # (        console.log&#40;'submit~~~~', formData&#41;)

[//]: # (    })

[//]: # (    return <div style={{width: '588px'}}>)

[//]: # ()

[//]: # (        <Form)

[//]: # (            size={size})

[//]: # (            submit={submit})

[//]: # (            onValuesChange={onValuesChange})

[//]: # ()

[//]: # (        >)

[//]: # (            <Form.Item)

[//]: # (                label="大小")

[//]: # (                name="size")

[//]: # (            >)

[//]: # (                <Radio.Group>)

[//]: # (                    <Radio.Button value="small">小</Radio.Button>)

[//]: # (                    <Radio.Button value="middle">中</Radio.Button>)

[//]: # (                    <Radio.Button value="large">大</Radio.Button>)

[//]: # (                </Radio.Group>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="账户")

[//]: # (                name="username")

[//]: # (            >)

[//]: # (                <Input/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="密码")

[//]: # (                name="password")

[//]: # (            >)

[//]: # (                <Input/>)

[//]: # (            </Form.Item>)

[//]: # ()

[//]: # (            <Form.Item)

[//]: # (                label="附件上传")

[//]: # (                name="file")

[//]: # (                style={{height: '80px'}})

[//]: # (           )

[//]: # (            >)

[//]: # (                <Upload maxCount={2}/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item)

[//]: # (                label="是否跨越")

[//]: # (                name="cors")

[//]: # (            >)

[//]: # (                <Radio/>)

[//]: # (            </Form.Item>)

[//]: # (            <Form.Item wrapperCol={{offset: 8, span: 16}}>)

[//]: # (                <Button type="primary" htmlType="submit">)

[//]: # (                    Submit)

[//]: # (                </Button>)

[//]: # ()

[//]: # (            </Form.Item>)

[//]: # (        </Form>)

[//]: # ()

[//]: # ()

[//]: # (    </div>)

[//]: # ()

[//]: # (})

[//]: # ()

[//]: # (```)

### 表单 字段属性嵌套

如果你的表单 数据结构需要 字段属性嵌套, 你可以使用 Form.Item 的 name 为数组来实现

[//]: # (```tsx)

[//]: # ()

[//]: # (import {Modal, Button, Form, Input, Upload, Radio} from 'ayongUI')

[//]: # ()

[//]: # (import {useState} from "react";)

[//]: # ()

[//]: # ()

[//]: # (export default &#40;&#41; => {)

[//]: # ()

[//]: # (    const [form] = Form.useForm&#40;&#41;;)

[//]: # ()

[//]: # ()

[//]: # (    const onFinishFailed = &#40;values: any&#41; => {)

[//]: # ()

[//]: # (        console.log&#40;values&#41;;)

[//]: # ()

[//]: # (    };)

[//]: # ()

[//]: # (    const submit = &#40;formData&#41; => {)

[//]: # ()

[//]: # (        console.log&#40;'submit~~~~', formData&#41;)

[//]: # ()

[//]: # (    })

[//]: # ()

[//]: # ()

[//]: # (    return <Form)

[//]: # (        form={form})

[//]: # (        onFinishFailed={onFinishFailed})

[//]: # (        submit={submit})

[//]: # (    >)

[//]: # (        <Form.Item)

[//]: # (            label="name")

[//]: # (            name={['user', 'name']})

[//]: # (            rules={[{required: true, message: 'Please input your username!'}]})

[//]: # ()

[//]: # (        >)

[//]: # (            <Input/>)

[//]: # ()

[//]: # (        </Form.Item>)

[//]: # (        <Form.Item)

[//]: # (            label="phone")

[//]: # (            name={['user', 'phone']})

[//]: # (        >)

[//]: # (            <Input/>)

[//]: # ()

[//]: # (        </Form.Item>)

[//]: # ()

[//]: # (        <Form.Item>)

[//]: # (          )

[//]: # (            <Button type="primary" htmlType="submit">)

[//]: # (                提交)

[//]: # (            </Button>)

[//]: # ()

[//]: # ()

[//]: # (        </Form.Item>)

[//]: # ()

[//]: # (    </Form>)

[//]: # ()

[//]: # ()

[//]: # (})

[//]: # ()

[//]: # (```)

### 使用自定义或第三方 表单控件

[//]: # ()
[//]: # (自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：)

[//]: # ()
[//]: # (1. 控件需要接收   `value`  属性。)

[//]: # (2. 控件需要接收 `onChange` 事件。)

[//]: # ()
[//]: # (```tsx)

[//]: # ()
[//]: # (import {Modal, Button, Form, Input, Upload, Radio, Select} from 'ayongUI')

[//]: # ()
[//]: # (import React, {useState} from "react";)

[//]: # ()
[//]: # (const PriceInput: React.FC<PriceInputProps> = &#40;{value = {}, onChange}&#41; => {)

[//]: # (    const [number, setNumber] = useState&#40;0&#41;;)

[//]: # (    const [currency, setCurrency] = useState<Currency>&#40;'rmb'&#41;;)

[//]: # ()
[//]: # (    const triggerChange = &#40;changedValue: { number?: number; currency?: Currency }&#41; => {)

[//]: # (        onChange&#40;{...value, number, currency, ...changedValue}&#41;;)

[//]: # (    };)

[//]: # ()
[//]: # (    const onNumberChange = &#40;value: string&#41; => {)

[//]: # (        const newNumber = parseInt&#40;value || '0', 10&#41;;)

[//]: # (        if &#40;Number.isNaN&#40;newNumber&#41;&#41; {)

[//]: # (            return;)

[//]: # (        })

[//]: # ()
[//]: # (        triggerChange&#40;{number: newNumber}&#41;;)

[//]: # (    };)

[//]: # ()
[//]: # (    const onCurrencyChange = &#40;newCurrency: Currency&#41; => {)

[//]: # (        triggerChange&#40;{currency: newCurrency}&#41;;)

[//]: # (    };)

[//]: # ()
[//]: # (    return &#40;)

[//]: # (        <div style={{display: 'flex', alignItems: 'center'}}>)

[//]: # (            <Input)

[//]: # (                type="text")

[//]: # (                value={value.number || number})

[//]: # (                onChange={onNumberChange})

[//]: # (                style={{width: 100, marginRight: 8}})

[//]: # (            />)

[//]: # (            <Select)

[//]: # (                value={value.currency || currency})

[//]: # (                style={{width: 100}})

[//]: # (                onChange={onCurrencyChange})

[//]: # (                options={[)

[//]: # (                    {value: 'usd', label: 'USD'},)

[//]: # (                    {value: 'eur', label: 'EUR'},)

[//]: # (                ]})

[//]: # (            />)

[//]: # (        </div>)

[//]: # (    &#41;;)

[//]: # (};)

[//]: # ()
[//]: # ()
[//]: # (export default &#40;&#41; => {)

[//]: # ()
[//]: # (    const [form] = Form.useForm&#40;&#41;;)

[//]: # ()
[//]: # ()
[//]: # (    const onFinishFailed = &#40;values: any&#41; => {)

[//]: # ()
[//]: # (        console.log&#40;values&#41;;)

[//]: # ()
[//]: # (    };)

[//]: # ()
[//]: # (    const submit = &#40;formData&#41; => {)

[//]: # ()
[//]: # (        console.log&#40;'submit~~~~', formData&#41;)

[//]: # ()
[//]: # (    })

[//]: # ()
[//]: # ()
[//]: # (    return <Form)

[//]: # (        form={form})

[//]: # (        onFinishFailed={onFinishFailed})

[//]: # (        submit={submit})

[//]: # (    >)

[//]: # (        <Form.Item)

[//]: # (            label="count")

[//]: # (            name='count')

[//]: # (            rules={[{required: true, message: 'Please input your username!'}]})

[//]: # ()
[//]: # (        >)

[//]: # (            <PriceInput/>)

[//]: # ()
[//]: # (        </Form.Item>)

[//]: # ()
[//]: # (        <Form.Item>)

[//]: # (            <Button type="primary" htmlType="submit">)

[//]: # (                提交)

[//]: # (            </Button>)

[//]: # (        </Form.Item>)

[//]: # ()
[//]: # (    </Form>)

[//]: # ()
[//]: # ()
[//]: # (})

[//]: # ()
[//]: # (```)

