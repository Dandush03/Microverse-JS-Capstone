import ApiGet from '../src/module/api';
import User from '../src/module/user';
import Sound from '../src/module/sound';

describe('test', () => {
  it('It Should return "Hello World!"', () => {
    const test = 'Hello World!';
    expect(test).toBe('Hello World!');
  });
});

describe('Test Api', () => {
  it('It Should return succeeded message', async () => {
    ApiGet('GET')
      .then(data => {
        expect(data).toEqual('Succeed');
      });
  });

  it('It Should return err message', async () => {
    ApiGet('POST', 'VERRRRY LONG STRINGGGGGGGGGGGGGGG', 1000000000000)
      .then(data => {
        expect(data).toEqual('err');
      });
  });
});

describe('Test User Module', () => {
  const user = new User();

  it('It Should Set & Return User Values', async () => {
    user.user = 'Test';
    expect(user.user).toBe('Test');
  });

  it('It Should Set & Return Score Values', async () => {
    user.score = 100;
    expect(user.score).toBe(100);
  });
});


describe('Test Sound Module', () => {
  const sound = new Sound();

  it('It Should Return soundOn Values', async () => {
    expect(sound.soundOn).toBe(true);
  });

  it('It Should Set soundOn Values', async () => {
    sound.soundOn = false;
    expect(sound.soundOn).toBe(false);
  });

  it('It Should Return musicOn Values', async () => {
    expect(sound.musicOn).toBe(true);
  });

  it('It Should Set musicOn Values', async () => {
    sound.musicOn = false;
    expect(sound.musicOn).toBe(false);
  });

  it('It Should Return bgMusicPlaying Values', async () => {
    expect(sound.bgMusicPlaying).toBe(false);
  });

  it('It Should Set bgMusicPlaying Values', async () => {
    sound.bgMusicPlaying = true;
    expect(sound.bgMusicPlaying).toBe(true);
  });
});
