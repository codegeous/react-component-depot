from airflow import DAG
from airflow.operators import BashOperator,PythonOperator
from datetime import datetime, timedelta
import json
from airflow.models import Variable
from listchannelpy import webhook


default_args = {
        'owner': 'airflow',
        'depends_on_past': False,
        'start_date': datetime(2020, 3, 3),
        'retries': 1,
        'retry_delay': timedelta(minutes=5),
        
      }

dag = DAG('daglistchannel', default_args=default_args)
t1 = BashOperator(
    task_id='testslack',
    bash_command="python /Users/keerthana/airflow/dags/listchannelpy.py ",
    xcom_push=True,
    dag=dag)
