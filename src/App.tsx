import './styles/css/App.css';
import { Card, Canvas } from './components';
import { AppModel } from './models/AppModel';

import {
  absolute,
  flex,
  flexCenter,
  flexColumn,
  flexValue,
  fullSize,
  padding,
} from './styles';

import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

export const appModel = new AppModel();

const App = observer(() => {
  return (
    <div css={[absolute(), fullSize, flexCenter]}>
      <Card
        css={[{ width: 'min(90%, 800px)', height: 'min(90%, 800px)' }, padding('xl')]}
      >
        <div css={[fullSize, flexColumn, { gap: 10 }]}>
          <div css={[flex('row'), { gap: 10 }]}>
            <input
              value={appModel.inputValue}
              placeholder="sin(1/z)"
              onChange={action((e) => {
                appModel.inputValue = e.currentTarget.value;
              })}
              css={{
                width: '100%',
                height: 30,
                border: appModel.state === 'good' ? '1px solid black' : '1px solid red',
                '&:active, &:focus': {
                  outline: 'none',
                  border: appModel.state === 'good' ? '2px solid black' : '2px solid red',
                },
              }}
              type="text"
            />
          </div>
          <div css={flexValue(1)}>
            <Canvas />
          </div>
        </div>
      </Card>
    </div>
  );
});

export default App;
