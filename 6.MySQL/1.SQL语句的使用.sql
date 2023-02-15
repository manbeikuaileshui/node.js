-- 注意：星号 * 是选取所有列的快捷方式
-- select * from my_bd_01.users

-- 注意：多个列之间，使用英文逗号进行分隔 
-- select username, password from my_bd_01.users

-- 注意：列和值要一一对应，多个列和多个值之间，使用英文逗号分隔
-- insert into my_bd_01.users (username, password) values ('wb', '345')
-- select * from my_bd_01.users

-- 多个被更新的列之间，使用英文逗号进行分隔
-- where 后面跟着的是更新的条件
-- 注意：别忘记提供更新条件，这样会导致整张表的数据都被更新，一定要慎重
-- update my_bd_01.users set password='123', status=1 where id=6
-- select * from my_bd_01.users

-- 注意：一定要加上where条件，不然会删除整张表
-- delete from my_bd_01.users where id=5
-- select * from my_bd_01.users

-- 查询 status 为1的所有用户
-- select * from my_bd_01.users where status=1
-- 查询 id 大于2的所有用户
-- select * from my_bd_01.users where id>2
-- 查询 username 不等于 wb 的所有用户
-- select * from my_bd_01.users where username<>'wb'

-- 查询所有status为0，并且id小于3的用户
-- select * from my_bd_01.users where status=0 and id<3
-- 查询所有status为1，或者username为zs的用户
-- select * from my_bd_01.users where status=1 or username='zs'

-- 按照status字段进行升序排序
-- select * from my_bd_01.users order by status asc
-- select * from my_bd_01.users order by status
-- 按照id字段进行降序排序
-- select * from my_bd_01.users order by id desc
-- 先按照status进行降序排序，在按照username的字母顺序，进行升序排序
-- select * from my_bd_01.users order by status desc, username asc

-- 查询status为0的总数据条数
select count(*) from my_bd_01.users where status=0


