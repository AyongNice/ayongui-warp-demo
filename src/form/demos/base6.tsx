import {Button, Form, Input, Upload, Radio, Select} from 'ayongUI'
import React, {useState} from "react";
const PriceInput: React.FC<PriceInputProps> = ({value = {}, onChange}) => {
    const [number, setNumber] = useState(0);
    const [currency, setCurrency] = useState<Currency>('rmb');
    const triggerChange = (changedValue: { number?: number; currency?: Currency }) => {
        onChange({...value, number, currency, ...changedValue});
    };
    const onNumberChange = (value: string) => {
        const newNumber = parseInt(value || '0', 10);
        if (Number.isNaN(newNumber)) {
            return;
        }
        triggerChange({number: newNumber});
    };
    const onCurrencyChange = (newCurrency: Currency) => {
        triggerChange({currency: newCurrency});
    };
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Input
                type="text"
                value={value.number || number}
                onChange={onNumberChange}
                style={{width: 100, marginRight: 8}}
            />
            <Select
                value={value.currency || currency}
                style={{width: 100}}
                onChange={onCurrencyChange}
                options={[
                    {value: 'usd', label: 'USD'},
                    {value: 'eur', label: 'EUR'},
                ]}
            />
        </div>
    );
};

export default () => {
    const [form] = Form.useForm();
    const onFinishFailed = (values: any) => {
        console.log('onFinishFailed', values);
    };
    const submit = (formData) => {
        console.log('submit~~~~', formData)
    }
    return <Form
        form={form}
        onFinishFailed={onFinishFailed}
        onSubmit={submit}
    >
        <Form.Item
            label="count"
            name='count'
            rules={[{required: true, message: 'Please input your username!'}]}
        >
            <PriceInput/>
        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
    </Form>
}


