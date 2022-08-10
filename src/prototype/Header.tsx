import React from "react";
import "../styles.css";
import "antd/dist/antd.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { StarFilled } from "@ant-design/icons";
import bg from './bg.png'
import bg1 from './bg1.png'
import bg3 from './bg3.png'
import image from './1.png'
import emoji from './emoji.png'
import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons'
import Like from './Like'

export default function Header() {
  const responsive = {
    Mx: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1.1
    },
    Lg: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.1
    },
    Md: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.1
    },
    Sm: {
      breakpoint: { max: 464, min: 0 },
      items: 1.1
    },
    VrSm: {
      breakpoint: { max: 280, min: 0 },
      items: 1
    }
  };

  
  return (
    <>
      <div className="App">
        <div className="bg-gray-50 flex autolayout rounded-lg py-2 px-3 mb-3">
          <img className="object-cover h-12 w-12" src={emoji} alt="1" />
                  <Like/>
          <h1 className="m-1 text-md lg:text-xl text-semibold">Add email to claim additional discount
            <strong> click here</strong></h1>
        </div>
        <h1 className="m-1 text-lg text-semibold">You’ve unlocked exclusive store wide offers</h1>
        <Carousel
          responsive={responsive}
          minimumTouchDrag={0}
          arrows={true}
          autoPlay={false}
          slidesToSlide={1}

        >
          <div className="tracking-tight m-1">
            <div className="w-full mr-2">
              <div className="bg-white rounded-md shadow-sm">
                <div className="h-full">
                  <div className="relative overflow-hidden rounded-md shadow-lg cursor-pointer">
                    <img className="object-cover w-full" src={bg} alt="1" />

                    <div className="absolute top-0 left-0 px-3 py-4">
                      <div className="flex mt-3">
                        <img className="rounded-full border-solid border-white border-2 -mt-3  object-cover w-12 h-12" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAAREA7h4eEMCwj09PTBwcGdnZtgYWCWlpbu7u6Eg4EdHRza2trGxsasrKyMjIx8fHzm5uaysrJYWFiSkpL4+PgjIiFpaWhJSUlAQD/Nzc11dXQsKykHBQCKioo2NjZRUU9ubW1DQkAuLix3d3cYFxSjo6EmJiU3NzXU1NJdXVwtgOPlAAADfUlEQVR4nO3ZaXeiMBSAYaOgolUr7rbi0sUu////TRJcCEkYpsU5cs77fCpJmpsrEBJoNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID78hQduspy1p7btZNp12Va3KX8p+nEWTWMlgXRbmGyEBmRFTUSboWdtlWLjqNilI2WuFpUbb4UQfMqELterkUkmi5/y1C2sMc/7+airfLRqrfX4w9SeuSLXNBIBJnqc9PgRxna0V7DKrNx6KuQQgQPivxDHa3MJh3xcKLHdD74SYbjNFozG21faT6WlrpoxGc7DpXecKWDmjPEPDxpqVGPL4eFHTszbOne1+2eEa1dcU6mrRrIKjO5HIR9Es96qq5frmNnhuoUiuk1mpwD/NEqslYh4kxBuFEn1X37/zpDeZkHRt9hM19StZ683UXXKOqrWdx94fw2w1jeEmJpFOmz+lR6vP8uVgFmRtHw8Px8cMf8bYYDVRYZRSNVNCw93n+nf9WSY65nhuEmkXdC2dZ1zLCxtIP61TLDtn4ilVwd1jJD/bhoio/nRyUaDYra1jPDWCR6BXz24d7xaPXMsDEUxtYhya45cmqaYWPwIowdjVj7UqxrhnI00+uWVKW49LSrb4ZSr6UMJq964vGE9GcoNpvFm1FydxmehXu9/HdXFmQoN8Tmmb/bDBu9d7W3cO/9CjK0ru37zTBd7btj1jHD+UDefeb2TMd0PxTrmGGs5s+xUdQR3hcLxRl+GyUTVXQ0W+kMt3a0m+4tPuQee2EUfauY7sWbP8OF6sa4ed8cQ5/L/XayM4pW/mgV6eZ/anV1+V4U+jMc58+OOl1BEOea6XxGmQJ1poP3nwy8tIl+/h0zx4H/qR56M3zS3cwui6GhnpGtlYNOKJNiGm2bb1atTz223ThS+isVMhDmbz+cRalHleG+czoyXn5M027edM12n66N7Ktvo1Ncn6K9pNFu/NZ7oNekyXnVphemI7PJ9buFrnV+t4ibwurGsbF+sqIFnnm7Qm1zbyFD5vfDpb5bfFndjBsO+WhJfr69ha91Jmoi3q3ftNyXmdbK6CZ/IVyi7TLNhHi47Qvvs8n+cuXtjvaCbVby61r7+1K1ifzv/DPR1sf/9AFRivXeIj+7p9J9h83b1N1NyWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALc/gUEpNdA7sRMAAAAASUVORK5CYII=" />
                      </div>
                      <h4 className="mb-2 mt-8 text-3xl text-white">Get 20% OFF luxury products on Bella Notte</h4>
                      <p className="leading-normal text-gray-100 text-md">Learn more</p>
                    </div>

                    <div className="text-left px-3 py-3 flex justify-between space-x-4">
                      <div className="flex text-2xl">
                        <div className="px-3">
                          <HeartOutlined />
                        </div>
                        <div className="px-3">
                          <ShareAltOutlined />
                        </div>
                      </div>
                      <button className="bg-black px-5 py-2 text-white text-md rounded-md">AVAIL NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tracking-tight m-1">
            <div className="w-full mr-2">
              <div className="bg-white rounded-md shadow-sm">
                <div className="h-full">
                  <div className="relative overflow-hidden rounded-md shadow-lg cursor-pointer">
                    <img className="object-cover w-full" src={bg1} alt="1" />

                    <div className="absolute top-0 left-0 px-3 py-4">
                      <div className="flex mt-3">
                        <img className="rounded-full border-solid border-white border-2 -mt-3  object-cover w-12 h-12" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAAREA7h4eEMCwj09PTBwcGdnZtgYWCWlpbu7u6Eg4EdHRza2trGxsasrKyMjIx8fHzm5uaysrJYWFiSkpL4+PgjIiFpaWhJSUlAQD/Nzc11dXQsKykHBQCKioo2NjZRUU9ubW1DQkAuLix3d3cYFxSjo6EmJiU3NzXU1NJdXVwtgOPlAAADfUlEQVR4nO3ZaXeiMBSAYaOgolUr7rbi0sUu////TRJcCEkYpsU5cs77fCpJmpsrEBJoNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID78hQduspy1p7btZNp12Va3KX8p+nEWTWMlgXRbmGyEBmRFTUSboWdtlWLjqNilI2WuFpUbb4UQfMqELterkUkmi5/y1C2sMc/7+airfLRqrfX4w9SeuSLXNBIBJnqc9PgRxna0V7DKrNx6KuQQgQPivxDHa3MJh3xcKLHdD74SYbjNFozG21faT6WlrpoxGc7DpXecKWDmjPEPDxpqVGPL4eFHTszbOne1+2eEa1dcU6mrRrIKjO5HIR9Es96qq5frmNnhuoUiuk1mpwD/NEqslYh4kxBuFEn1X37/zpDeZkHRt9hM19StZ683UXXKOqrWdx94fw2w1jeEmJpFOmz+lR6vP8uVgFmRtHw8Px8cMf8bYYDVRYZRSNVNCw93n+nf9WSY65nhuEmkXdC2dZ1zLCxtIP61TLDtn4ilVwd1jJD/bhoio/nRyUaDYra1jPDWCR6BXz24d7xaPXMsDEUxtYhya45cmqaYWPwIowdjVj7UqxrhnI00+uWVKW49LSrb4ZSr6UMJq964vGE9GcoNpvFm1FydxmehXu9/HdXFmQoN8Tmmb/bDBu9d7W3cO/9CjK0ru37zTBd7btj1jHD+UDefeb2TMd0PxTrmGGs5s+xUdQR3hcLxRl+GyUTVXQ0W+kMt3a0m+4tPuQee2EUfauY7sWbP8OF6sa4ed8cQ5/L/XayM4pW/mgV6eZ/anV1+V4U+jMc58+OOl1BEOea6XxGmQJ1poP3nwy8tIl+/h0zx4H/qR56M3zS3cwui6GhnpGtlYNOKJNiGm2bb1atTz223ThS+isVMhDmbz+cRalHleG+czoyXn5M027edM12n66N7Ktvo1Ncn6K9pNFu/NZ7oNekyXnVphemI7PJ9buFrnV+t4ibwurGsbF+sqIFnnm7Qm1zbyFD5vfDpb5bfFndjBsO+WhJfr69ha91Jmoi3q3ftNyXmdbK6CZ/IVyi7TLNhHi47Qvvs8n+cuXtjvaCbVby61r7+1K1ifzv/DPR1sf/9AFRivXeIj+7p9J9h83b1N1NyWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALc/gUEpNdA7sRMAAAAASUVORK5CYII=" />
                      </div>
                      <h4 className="mb-2 mt-8 text-3xl text-white">Get 20% OFF luxury products on Bella Notte</h4>
                      <p className="leading-normal text-gray-100 text-md">Learn more</p>
                    </div>

                    <div className="text-left px-3 py-3 flex justify-between space-x-4">
                      <div className="flex text-2xl">
                        <div className="px-3">
                          <HeartOutlined />
                        </div>
                        <div className="px-3">
                          <ShareAltOutlined />
                        </div>
                      </div>
                      <button className="bg-black px-5 py-2 text-white text-md rounded-md">AVAIL NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </Carousel>
        <Carousel
          responsive={responsive}
          minimumTouchDrag={0}
          arrows={true}
          autoPlay={false}
          slidesToSlide={1}

        >
          <div className="tracking-tight m-1">
            <div className="w-full mr-2">
              <div className="bg-white rounded-md shadow-sm">
                <div className="h-full">
                  <div className="relative overflow-hidden rounded-md shadow-lg cursor-pointer">
                    <img className="object-cover w-full" src={image} alt="1" />

                    <div className="absolute top-0 left-0 px-3 py-4">
                      <div className="flex mt-3">
                        <img className="rounded-full border-solid border-white border-2 -mt-3  object-cover w-12 h-12" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAAREA7h4eEMCwj09PTBwcGdnZtgYWCWlpbu7u6Eg4EdHRza2trGxsasrKyMjIx8fHzm5uaysrJYWFiSkpL4+PgjIiFpaWhJSUlAQD/Nzc11dXQsKykHBQCKioo2NjZRUU9ubW1DQkAuLix3d3cYFxSjo6EmJiU3NzXU1NJdXVwtgOPlAAADfUlEQVR4nO3ZaXeiMBSAYaOgolUr7rbi0sUu////TRJcCEkYpsU5cs77fCpJmpsrEBJoNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID78hQduspy1p7btZNp12Va3KX8p+nEWTWMlgXRbmGyEBmRFTUSboWdtlWLjqNilI2WuFpUbb4UQfMqELterkUkmi5/y1C2sMc/7+airfLRqrfX4w9SeuSLXNBIBJnqc9PgRxna0V7DKrNx6KuQQgQPivxDHa3MJh3xcKLHdD74SYbjNFozG21faT6WlrpoxGc7DpXecKWDmjPEPDxpqVGPL4eFHTszbOne1+2eEa1dcU6mrRrIKjO5HIR9Es96qq5frmNnhuoUiuk1mpwD/NEqslYh4kxBuFEn1X37/zpDeZkHRt9hM19StZ683UXXKOqrWdx94fw2w1jeEmJpFOmz+lR6vP8uVgFmRtHw8Px8cMf8bYYDVRYZRSNVNCw93n+nf9WSY65nhuEmkXdC2dZ1zLCxtIP61TLDtn4ilVwd1jJD/bhoio/nRyUaDYra1jPDWCR6BXz24d7xaPXMsDEUxtYhya45cmqaYWPwIowdjVj7UqxrhnI00+uWVKW49LSrb4ZSr6UMJq964vGE9GcoNpvFm1FydxmehXu9/HdXFmQoN8Tmmb/bDBu9d7W3cO/9CjK0ru37zTBd7btj1jHD+UDefeb2TMd0PxTrmGGs5s+xUdQR3hcLxRl+GyUTVXQ0W+kMt3a0m+4tPuQee2EUfauY7sWbP8OF6sa4ed8cQ5/L/XayM4pW/mgV6eZ/anV1+V4U+jMc58+OOl1BEOea6XxGmQJ1poP3nwy8tIl+/h0zx4H/qR56M3zS3cwui6GhnpGtlYNOKJNiGm2bb1atTz223ThS+isVMhDmbz+cRalHleG+czoyXn5M027edM12n66N7Ktvo1Ncn6K9pNFu/NZ7oNekyXnVphemI7PJ9buFrnV+t4ibwurGsbF+sqIFnnm7Qm1zbyFD5vfDpb5bfFndjBsO+WhJfr69ha91Jmoi3q3ftNyXmdbK6CZ/IVyi7TLNhHi47Qvvs8n+cuXtjvaCbVby61r7+1K1ifzv/DPR1sf/9AFRivXeIj+7p9J9h83b1N1NyWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALc/gUEpNdA7sRMAAAAASUVORK5CYII=" />
                      </div>
                      <h4 className="mb-2 mt-8 text-3xl text-white">Get 20% OFF luxury products on Bella Notte</h4>
                      <p className="leading-normal text-gray-100 text-md">Learn more</p>
                    </div>

                    <div className="text-left px-3 py-3 flex justify-between space-x-4">
                      <div className="flex text-2xl">
                        <div className="px-3">
                          <HeartOutlined />
                        </div>
                        <div className="px-3">
                          <ShareAltOutlined />
                        </div>
                      </div>
                      <button className="bg-black px-5 py-2 text-white text-md rounded-md">AVAIL NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tracking-tight m-1">
            <div className="w-full mr-2">
              <div className="bg-white rounded-md shadow-sm">
                <div className="h-full">
                  <div className="relative overflow-hidden rounded-md shadow-lg cursor-pointer">
                    <img className="object-cover w-full" src={bg3} alt="1" />

                    <div className="absolute top-0 left-0 px-3 py-4">
                      <div className="flex mt-3">
                        <img className="rounded-full border-solid border-white border-2 -mt-3  object-cover w-12 h-12" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAAAREA7h4eEMCwj09PTBwcGdnZtgYWCWlpbu7u6Eg4EdHRza2trGxsasrKyMjIx8fHzm5uaysrJYWFiSkpL4+PgjIiFpaWhJSUlAQD/Nzc11dXQsKykHBQCKioo2NjZRUU9ubW1DQkAuLix3d3cYFxSjo6EmJiU3NzXU1NJdXVwtgOPlAAADfUlEQVR4nO3ZaXeiMBSAYaOgolUr7rbi0sUu////TRJcCEkYpsU5cs77fCpJmpsrEBJoNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID78hQduspy1p7btZNp12Va3KX8p+nEWTWMlgXRbmGyEBmRFTUSboWdtlWLjqNilI2WuFpUbb4UQfMqELterkUkmi5/y1C2sMc/7+airfLRqrfX4w9SeuSLXNBIBJnqc9PgRxna0V7DKrNx6KuQQgQPivxDHa3MJh3xcKLHdD74SYbjNFozG21faT6WlrpoxGc7DpXecKWDmjPEPDxpqVGPL4eFHTszbOne1+2eEa1dcU6mrRrIKjO5HIR9Es96qq5frmNnhuoUiuk1mpwD/NEqslYh4kxBuFEn1X37/zpDeZkHRt9hM19StZ683UXXKOqrWdx94fw2w1jeEmJpFOmz+lR6vP8uVgFmRtHw8Px8cMf8bYYDVRYZRSNVNCw93n+nf9WSY65nhuEmkXdC2dZ1zLCxtIP61TLDtn4ilVwd1jJD/bhoio/nRyUaDYra1jPDWCR6BXz24d7xaPXMsDEUxtYhya45cmqaYWPwIowdjVj7UqxrhnI00+uWVKW49LSrb4ZSr6UMJq964vGE9GcoNpvFm1FydxmehXu9/HdXFmQoN8Tmmb/bDBu9d7W3cO/9CjK0ru37zTBd7btj1jHD+UDefeb2TMd0PxTrmGGs5s+xUdQR3hcLxRl+GyUTVXQ0W+kMt3a0m+4tPuQee2EUfauY7sWbP8OF6sa4ed8cQ5/L/XayM4pW/mgV6eZ/anV1+V4U+jMc58+OOl1BEOea6XxGmQJ1poP3nwy8tIl+/h0zx4H/qR56M3zS3cwui6GhnpGtlYNOKJNiGm2bb1atTz223ThS+isVMhDmbz+cRalHleG+czoyXn5M027edM12n66N7Ktvo1Ncn6K9pNFu/NZ7oNekyXnVphemI7PJ9buFrnV+t4ibwurGsbF+sqIFnnm7Qm1zbyFD5vfDpb5bfFndjBsO+WhJfr69ha91Jmoi3q3ftNyXmdbK6CZ/IVyi7TLNhHi47Qvvs8n+cuXtjvaCbVby61r7+1K1ifzv/DPR1sf/9AFRivXeIj+7p9J9h83b1N1NyWgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALc/gUEpNdA7sRMAAAAASUVORK5CYII=" />
                      </div>
                      <h4 className="mb-2 mt-8 text-3xl text-white">Get 20% OFF luxury products on Bella Notte</h4>
                      <p className="leading-normal text-gray-100 text-md">Learn more</p>
                    </div>

                    <div className="text-left px-3 py-3 flex justify-between space-x-4">
                      <div className="flex text-2xl">
                        <div className="px-3">
                          <HeartOutlined />
                        </div>
                        <div className="px-3">
                          <ShareAltOutlined />
                        </div>
                      </div>
                      <button className="bg-black px-5 py-2 text-white text-md rounded-md">AVAIL NOW</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </Carousel>
      </div>
    </>
  );
}
