import "./CardDocs.css";
import { Button } from "../../../MainArea/Button/Button";
import { Image } from "../../../MainArea/Image/Image";
import { FiPlus } from "react-icons/fi";
import { BsCode } from "react-icons/bs";
import Gist from "react-gist";
export const CardDocs = () => {
  return (
    <div>
      <h1>Cards</h1>
      <p>
        These are some of the card design available in this library. Just copy
        the code and customize it for using it in your next project.
      </p>
      <h3>Usage</h3>
      <div className="usage">
        <div className=" card card-I">
          <div className="card-I-title">Card Title</div>
          <div className="card-I-subtitle">Card Subtitle Div</div>
          <div className="card-I-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <div className="card-I-button-div">
            <Button
              colorScheme="fb"
              text="Read More"
              size="sm"
              variant="secondary"
              borderRadius="b3"
            />
            <Button
              colorScheme="red"
              text="Delete"
              size="sm"
              borderRadius="b3"
            />
          </div>
        </div>
      </div>
      <Gist id="b4f52f300fdfa4b54d85d49a2d3deb2a" />

      <div className="usage">
        <div className="card card-II">
          <div className="card-II__profile-card">
            <div className="card-II__profile__details">
              <Image src="https://bit.ly/3qZAJqc" borderSize="b1" size="xs" />
              <div className="card-II__name-id">
                <span className="card-II__name">Kenny Foster</span>
                <span className="card-II__id">@fosterlive</span>
              </div>
              <Button
                leftIcon={<FiPlus />}
                borderRadius="full"
                variant="secondary"
                colorScheme="fb"
              />
            </div>
          </div>
        </div>
      </div>
      <Gist id="c941dcf22466668739bd2d9fa23cc874" />
    </div>
  );
};
