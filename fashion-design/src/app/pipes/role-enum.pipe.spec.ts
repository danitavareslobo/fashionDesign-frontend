import { RoleEnumPipe } from './role-enum.pipe';

describe('RoleEnumPipe', () => {
  it('create an instance', () => {
    const pipe = new RoleEnumPipe();
    expect(pipe).toBeTruthy();
  });
});
