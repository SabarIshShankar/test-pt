import React, {useState} from "react";
import "./styles.css";
import "antd/dist/antd.css";
import { MailOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


export default function Email() {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };
  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;


  return (
    <>
      <div className="bg-neutral-50 font max-h-screen">
        <div className="max-w-lg mx-auto py-4 bg-neutral-50  px-5 sm:px-0 lg:max-w-xl lg:px-8">


          <button className="text-2xl">
            <ArrowLeftOutlined />
          </button>

          <h4 className="mb-2 mt-16 text-3xl text-black font-medium">Include your email address</h4>
          <h4 className="mb-8 text-lg text-gray-400">Enter to reveal exclusive discounts and deals.</h4>
          <div className="text-2xl">



            <Input size="large" placeholder="large size" prefix={<MailOutlined />} />
            <br />
            <br />

            <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
        </Checkbox>
            <h4 className="mb-5 text-sm text-gray-400">Consent to receiving marketing information from Glimpse and its brand partners
</h4>
          </div>
          <button className="w-full mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-lg bg-slate-900 text-white outline-none focus:outline-none">
            CONTINUE
          </button>

          

        </div>
      </div>


    </>
  );
}
