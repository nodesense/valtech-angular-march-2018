import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();

    expect(pipe.transform(2, 1)).toBe(2);

    expect(pipe.transform(3)).toBe(3);

    
  });
});
